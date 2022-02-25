import requests
from urllib.parse import urljoin,urlencode
from concurrent.futures import ThreadPoolExecutor
import math
import json

import flask_server.config as config

from flask_server.db import insert_into_db, insert_many_into_db

from flask_server.model import User, Repo

# TODO : Look into how to handle errors in ThreadPoolExecutor
def fetch_repo_details(username,repo_url,page):
    try:
        query = "?"+urlencode({"per_page":config.RESULT_PER_PAGE,"page":page})
        user_repo_url = urljoin(repo_url, query)
        repos = requests.get(user_repo_url,headers=config.AUTHORIZATION_HEADER).json()
        repo_list = []
        for repo in repos:
            r = Repo(username, repo["name"], repo["stargazers_count"], repo["forks_count"], repo["language"], repo["languages_url"], repo["html_url"])
            repo_list.append(vars(r))
        insert_many_into_db(config.REPOS_COLLECTION, repo_list)
    except Exception as e:
        print("error in repo details",e.__traceback__)



def fetch_user_details(username):
    user_url = urljoin(config.USER_GITHUB_API,username)
    user_details = requests.get(user_url,headers=config.AUTHORIZATION_HEADER).json()
    user = User(user_details["login"],user_details["public_repos"],user_details["repos_url"])
    insert_into_db(config.USER_COLLECTION, vars(user))
    pages = math.ceil(user.repo_count / config.RESULT_PER_PAGE)
    with ThreadPoolExecutor(max_workers=100) as executor:
        [executor.submit(fetch_repo_details, user._id, user.repos_url, page) for page in range(1,pages+1)]
    return username
