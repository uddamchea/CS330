#!/usr/bin/env python3
"""
Faker API
"""

import json, pyjokes
from flask import Flask, Response, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)

@app.route("/api/v1/jokes/<category>/<language>/<int:number>")
def get_jokes(category, language, number):
    newDict = {}
    if language== "es" and category== "chuck":
        return "No Jokes about Chuck Norris in Spanish!"
    else:
        allJokes = pyjokes.get_jokes(language=language, category=category)
        for m in range(number):
            newDict[m] = allJokes[m]
        joke=Response(json.dumps(newDict))
        joke.headers["Access-Control-Allow-Origin"] = "*"
        joke.headers["Content-Type"] = "application/json"
        return joke

@app.route("/api/v1/jokes/<category>/<language>/<int:number>/<int:id>")
def get_specific(category, language, number, id):
    jokeDict = {}
    if language == "es" and category == "chuck":
        return "No Jokes about Chuck Norris in Spanish!"
    else:
        allJokes = pyjokes.get_jokes(language=language, category=category)
        for n in range(len(allJokes)):
            jokeDict[n] = allJokes[n]
        joke = Response({id:jokeDict[id]})
        joke.headers["Access-Control-Allow-Origin"] = "*"
        joke.headers["Content-Type"] = "application/json"
        return joke

if __name__ == "__main__":number
app.run("0.0.0.0")