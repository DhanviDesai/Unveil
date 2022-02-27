from flask import Flask, send_from_directory
from flask_cors import CORS,cross_origin
from flask_server.routes import UNVEIL_BLUEPRINT

app = Flask(__name__,static_folder="../react_app/build",static_url_path="")
CORS(app, support_credentials=True)

app.register_blueprint(UNVEIL_BLUEPRINT)

@app.route('/')
@cross_origin(supports_credentials=True)
def serve():
    return send_from_directory(app.static_folder,"index.html")