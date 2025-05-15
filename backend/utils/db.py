from pymysql import connect
from flask import current_app

def getConnection():
   mysql = connect(
      host = current_app.config['MYSQL_HOST'],
      user = current_app.config['MYSQL_USER'],
      password= current_app.config['MYSQL_PASSWORD'],
      db = current_app.config['MYSQL_DB']
   )
   return mysql.cursor()