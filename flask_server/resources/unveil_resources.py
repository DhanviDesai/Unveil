from flask import request, make_response
from flask_restful import Resource
from flask import jsonify

from flask_server.repositories import UnveilRepo

from urllib.parse import urlparse

unveil_repo = UnveilRepo()

class GetUserResource(Resource):
    def get(self,username=None):
        result = unveil_repo.getUser(username)
        return make_response(jsonify(result),201)

class GetReposResource(Resource):
    def get(self,username=None):
        result = [doc for doc in unveil_repo.getRepos(username)]
        return make_response(jsonify(result),200)

class GetAllUsersResource(Resource):
    def get(self):
        result = [doc for doc in unveil_repo.getAllUsers()]
        return make_response(jsonify(result),200)