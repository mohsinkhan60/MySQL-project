from flask import Blueprint
from validations.RoseValidation import rose_schema

rose_route = Blueprint("RoseRoute", __name__)

@rose_route.route("/add-rose", methods=["GET", "POST"])
def rose():
   return "This is Mohsin khan"