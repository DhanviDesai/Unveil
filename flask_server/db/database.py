from pymongo import MongoClient

import flask_server.config as config

mongo_client = MongoClient(config.MONGODB_URL)
db = mongo_client[config.DATABASE_NAME]
    
def insert_into_db(collection, document):
    return db[collection].insert_one(document)
    
def insert_many_into_db(collection, document_list):
    return db[collection].insert_many(document_list)
    
def fetch_from_db(collection, key, value):
    return db[collection].find_one({key:value})
    
def fetch_many_from_db(collection, key, value):
    return db[collection].find({key:{"$in":[value]}},{"_id":0})