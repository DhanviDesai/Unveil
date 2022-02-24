from flask import request, make_response
from flask_restful import Resource
from flask import jsonify

from flask_server.repositories import UnveilRepo

from urllib.parse import urlparse

unveil_repo = UnveilRepo()

class GetUserResource(Resource):
    def get(self,username=None):
        print("I am here",username)
        result = unveil_repo.getUser("")
        return make_response(jsonify(result),200)