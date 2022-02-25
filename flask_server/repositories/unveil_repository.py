from flask_server.db import fetch_from_db, fetch_user_details, fetch_many_from_db

import flask_server.config as config

class UnveilRepo:
    def getUser(self,username):
        user_details = fetch_from_db(config.USER_COLLECTION, config.ID, username)
        if user_details is not None:
            return user_details
        else:
            response = fetch_user_details(username)
            if response == username:
                return fetch_from_db(config.USER_COLLECTION, config.ID, username)
    
    def getRepos(self,username):
        cursor = fetch_many_from_db(config.REPOS_COLLECTION, config.USERNAME, username)
        for doc in cursor:
            yield doc