import os

MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")
USER_COLLECTION = os.getenv("USER_COLLECTION")
REPOS_COLLECTION = os.getenv("REPOS_COLLECTION")
PERSONAL_ACCESS_TOKEN = os.getenv("PERSONAL_ACCESS_TOKEN")

ID = "_id"
USERNAME = "username"
REPO_COUNT = "repo_count"

USER_GITHUB_API = "https://api.github.com/users/"

AUTHORIZATION_HEADER = {"Authorization":"token "+PERSONAL_ACCESS_TOKEN}

RESULT_PER_PAGE = 10
