from flask import Blueprint
from flask_restful import Api

from flask_server.resources import GetUserResource, GetReposResource, GetAllUsersResource

UNVEIL_BLUEPRINT = Blueprint("unveil",__name__)

Api(UNVEIL_BLUEPRINT).add_resource(GetUserResource,"/user/<username>")
Api(UNVEIL_BLUEPRINT).add_resource(GetReposResource,"/user/repos/<username>")
Api(UNVEIL_BLUEPRINT).add_resource(GetAllUsersResource,"/users")