from flask import Blueprint, request
from validations.RoseValidation import rose_schema
from marshmallow import ValidationError
from utils.db import getConnection

rose_route = Blueprint("RoseRoute", __name__)

@rose_route.route("/add-rose",methods=['GET','POST'])
def rose():
    try:
        mysql =getConnection()
        cursor= mysql.cursor()
        rose_data = rose_schema.load(request.json)

        sql = "insert into rose(title,description,image) values(%s,%s,%s)"

        cursor.execute(sql, (rose_data['title'], rose_data['description'], rose_data['image']))
        mysql.commit()
        mysql.close()
        return {"message": "Rose added successfully", "data": rose_data}, 200
    except ValidationError as err:
        return {
            "error":next(iter(err.messages.values()))[0]
        },400
    except Exception as e:
        print("Error in /add-rose:", e)  # Add this line
        return {"error": str(e)}, 500
   