from flask import Flask, Response, jsonify
import json
import random

app = Flask(__name__)

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
        "Tenet"
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