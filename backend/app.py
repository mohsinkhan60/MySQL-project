from flask import Flask
from routes.RoseRoute import rose_route

app = Flask(__name__)

# DATABASE connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'rose_day'

# routes

# prefix_url = http://localhost:5000/api/v1/rose
app.register_blueprint(rose_route, url_prefix="/api/v1")

# @app.route("/", methods=["GET"])
# def HomePage():
#    return "Hello Mohsin"