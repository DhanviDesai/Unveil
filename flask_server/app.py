from flask import Flask

from flask_server.routes import UNVEIL_BLUEPRINT

app = Flask(__name__)

app.register_blueprint(UNVEIL_BLUEPRINT)