from flask import Blueprint

rose_route = Blueprint("RoseRoute", __name__)

@rose_route.route("/rose")
def rose():
   return "This is Mohsin khan"