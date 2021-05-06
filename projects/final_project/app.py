from flask import Flask, Response, jsonify, request, render_template, url_for, redirect
import json
import random
import os
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import sqlite3 as sql
import sqlite3

app = Flask(__name__)

conn = sqlite3.connect('database.db')
print ("Opened database successfully");

# conn.execute('CREATE TABLE ACTION (name TEXT, year TEXT, genre TEXT, producer TEXT)')
# print ("Table created successfully");

# conn.execute('CREATE TABLE ADVENTURE (name TEXT, year TEXT, genre TEXT, producer TEXT)')
# print ("Table created successfully");

# conn.execute('CREATE TABLE ROMCOM (name TEXT, year TEXT, genre TEXT, producer TEXT)')
# print ("Table created successfully");
# conn.close()

@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("login.html")

@app.route("/home", methods=['GET', 'POST'])
def home():
    return render_template("home.html")

@app.route("/login", methods=['GET', 'POST'])
def login():
    return render_template("login.html")

@app.route("/logout", methods=['GET', 'POST'])
def logout():
    return render_template("login.html")

@app.route("/guest", methods=['GET', 'POST'])
def guest():
    return render_template("guest.html")

@app.route("/server", methods=['GET', 'POST'])
def server():
    return render_template("server.html")

@app.route("/add", methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        try:
            name = request.form['name']
            year = request.form['year']
            genre = request.form['genre']
            producer = request.form['producer']
                
            with sql.connect("database.db") as con:
                cur = con.cursor()
                cur.execute("INSERT INTO ACTION (name,year,genre,producer) VALUES (?,?,?,?)",(name,year,genre,producer) )
                    
            con.commit()
            msg = "Record successfully added"
        except:
            con.rollback()
            msg = "error in insert operation"
            
        finally:
            return render_template("result.html",msg = msg)
            con.close()
    return render_template("add.html")

@app.route("/result", methods=['GET', 'POST'])
def result():
    return render_template("result.html")

@app.route("/api/v1/action")
def get_action():
    movie_action = [
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
        "Batman v Superman"
    ]

    res = Response(json.dumps({"name": movie_action}))
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res

@app.route("/api/v1/adventure")
def get_adventure():
    movie_adventure = [
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
        "Big Fish"
    ]

    res = Response(json.dumps({"name": movie_adventure}))
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res

@app.route("/api/v1/romcom")
def get_romcom():
    movie_romcom = [
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

    res = Response(json.dumps({"name": movie}))
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res

if __name__ == "__main__":
    app.run("0.0.0.0")