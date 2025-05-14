from flask import Flask
from routes.RoseRoute import rose_route

app = Flask(__name__)

# routes

# prefix_url = http://localhost:5000/api/v1/rose
app.register_blueprint(rose_route, url_prefix="/api/v1")

# @app.route("/", methods=["GET"])
# def HomePage():
#    return "Hellow Mohsin"