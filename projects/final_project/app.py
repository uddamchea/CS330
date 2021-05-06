import os
import json
import random
import sqlite3
import requests
import sqlite3 as sql
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import Flask, Response, jsonify, request, render_template, url_for, redirect

app = Flask(__name__)

conn = sqlite3.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db')
print ("Opened database successfully");

# conn.execute('CREATE TABLE ACTION (name TEXT, year TEXT, genre TEXT, producer TEXT)')
# print ("Table created successfully");

# conn.execute('CREATE TABLE ADVENTURE (name TEXT, year TEXT, genre TEXT, producer TEXT)')
# print ("Table created successfully");

# conn.execute('CREATE TABLE ROMCOM (name TEXT, year TEXT, genre TEXT, producer TEXT)')
# print ("Table created successfully");
# conn.close()

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/request")
def getAPI():
    summary = requests.get("http://localhost:5000/api/v1/random")
    response = summary.json()
    return render_template("request.html", data=response)

@app.route('/addrec',methods = ['POST', 'GET'])
def addrec():
   if request.method == 'POST':
      try:
          if len(request.form['genre']) == 6:
            name = request.form['name']
            year = request.form['year']
            genre = request.form['genre']
            producer = request.form['producer']
         
            with sql.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO ACTION (name,year,genre,producer) VALUES (?,?,?,?)",(name,year,genre,producer) )
                con.commit()
                msg = "Record Successfully Added"
             
          if len(request.form['genre']) == 9:
            name = request.form['name']
            year = request.form['year']
            genre = request.form['genre']
            producer = request.form['producer']
         
            with sql.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO ADVENTURE (name,year,genre,producer) VALUES (?,?,?,?)",(name,year,genre,producer) )
                con.commit()
                msg = "Record Successfully Added"

          else:
            name = request.form['name']
            year = request.form['year']
            genre = request.form['genre']
            producer = request.form['producer']
         
            with sql.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO ROMCOM (name,year,genre,producer) VALUES (?,?,?,?)",(name,year,genre,producer) )
                con.commit()
                msg = "Record Successfully Added"

      except:
          con.rollback()
          msg = "Error in Insert Operation"
      
      finally:
         return render_template("result.html",msg = msg)
         con.close()

@app.route("/option")
def option():
    return render_template("option.html")

@app.route("/action")
def action():
    con = sql.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db')
    con.row_factory = sql.Row
   
    cur = con.cursor()
    cur.execute("select * from ACTION")
   
    rows = cur.fetchall(); 
    return render_template("action.html",rows = rows)

@app.route("/adventure")
def adventure():
    con = sql.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db')
    con.row_factory = sql.Row
   
    cur = con.cursor()
    cur.execute("select * from ADVENTURE")
   
    rows = cur.fetchall(); 
    return render_template("adventure.html",rows = rows)

@app.route("/romcom")
def romcom():
    con = sql.connect('/home/cheara01/Desktop/CS330/projects/final_project/database.db')
    con.row_factory = sql.Row
   
    cur = con.cursor()
    cur.execute("select * from ROMCOM")
   
    rows = cur.fetchall(); 
    return render_template("romcom.html",rows = rows)




@app.route("/api/v1/random")
def get_random(): 
    movies= [
        "Mortal Kombat",
        "Tom Clancy's Without Remorse",
        "Nobody",
        "The Tomorrow War",
        "Godzilla vs Kong",
        "Love and Monsters",
        "Demon Slayer: Mugen Train",
        "The Virtuoso",
        "Zack Snyder's Justice League",
        "Wrath of Man",
        "Tenet",
        "Scott Pilgrim vs. the World",
        "Avengers: Endgame",
        "Avengers: Infinity War",
        "Ford v Ferrari",
        "Raya and the Last Dragon",
        "Black Widow",
        "The Suicide Squad",
        "Spider-Man: No Way Home",
        "Batman v Superman",
        "Seven Years in Tibet",
        "Journey to the Center of the Earth",
        "Black Death",
        "Alive",
        "Apocalypto",
        "1917",
        "Valhalla Rising",
        "Operation Condor",
        "The Goonies",
        "Swiss Army Man",
        "The Count of Monte Cristo",
        "Cold Mountain",
        "The Way Back",
        "Everest",
        "Fitzcarraldo",
        "Where the Wild Things Are",
        "The Road",
        "The Poseidon Adventure",
        "Gladiator",
        "Big Fish",
        "Crazy Rich Asians",
        "Something's Gotta Give",
        "The Wedding Singer",
        "(500) Days of Summer",
        "Crazy, Stupid, Love",
        "Forgetting Sarah Marshall",
        "Reality Bites",
        "Roxanne",
        "The Best Man",
        "Go Fish",
        "Bridget Jones' Diary",
        "10 Things I Hate About You",
        "Amelie",
        "The Big Sick",
        "Set It Up",
        "Pretty Woman",
        "Punch-Drunk Love",
        "Sabrina",
        "Enough Said",
        "Jerry Maguire"
    ]
    
    random_movie = random.choice(movies)
    res = Response(json.dumps
    ({
        "name": random_movie,
    }))
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res