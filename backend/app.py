from flask import Flask
# from routes.RoseRoute import rose_route

# app = Flask(__name__)

# DATABASE connection


# routes

# prefix_url = http://localhost:5000/api/v1/rose
# app.register_blueprint(rose_route, url_prefix="/api/v1")

# ...existing code...

# filepath: d:\MySQL-project\backend\app.py
def create_app():
    app = Flask(__name__)
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = ''
    app.config['MYSQL_DB'] = 'rose_day'
    with app.app_context():
        from routes.RoseRoute import rose_route
        app.register_blueprint(rose_route, url_prefix="/api/v1/rose")
    return app

# ...existing code...


# @app.route("/", methods=["GET"])
# def HomePage():
#    return "Hello Mohsin"