from pymongo import ASCENDING as asc
from pymongo import DESCENDING as desc

from flask_server.db import fetch_from_db, fetch_user_details, fetch_many_from_db, fetch_many_from_db_conditional

import flask_server.config as config

class UnveilRepo:
    def getUser(self,username):
        user_details = fetch_from_db(config.USER_COLLECTION, config.ID, username.lower())
        if user_details is not None:
            return user_details
        else:
            response = fetch_user_details(username.lower())
            if response == username:
                return fetch_from_db(config.USER_COLLECTION, config.ID, username.lower())
    
    def getRepos(self,username):
        cursor = fetch_many_from_db(config.REPOS_COLLECTION, config.USERNAME, username.lower())
        for doc in cursor:
            yield doc
    
    def getAllUsers(self):
        users_cursor = fetch_many_from_db_conditional(config.USER_COLLECTION, config.REPO_COUNT, desc)
        for user in users_cursor:
            yield user
