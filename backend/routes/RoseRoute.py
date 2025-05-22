from flask import Blueprint, request
from validations.RoseValidation import rose_schema
from marshmallow import ValidationError
from utils.db import getConnection

rose_route = Blueprint("RoseRoute", __name__)

@rose_route.route("/get-roses",methods=['GET'])
def get_roses():
    try:
        mysql = getConnection()
        cursor= mysql.cursor()
        sql ="SELECT * FROM rose"
        cursor.execute(sql)
        roses = cursor.fetchall()
        mysql.close()
        roses_arr =[]
        for i in roses:
            items={
                "id":i[0],
                "title":i[1],
                "image":i[3]
            }
            roses_arr.append(items)
        return roses_arr,200
    except Exception as e:
        return {"error":str(e)},500
        

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
   