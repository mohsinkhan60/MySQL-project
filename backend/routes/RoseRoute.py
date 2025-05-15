from flask import Blueprint, request
from validations.RoseValidation import rose_schema
from marshmallow import ValidationError

rose_route = Blueprint("RoseRoute", __name__)

@rose_route.route("/add-rose", methods=["GET", "POST"])
def rose():
   try:
       rose_data = rose_schema.load(request.json)
       return {"message": "Rose added successfully", "data": rose_data}, 200
   except ValidationError as err:
       return {"error": next(iter(err.messages.values()))[0]}, 400