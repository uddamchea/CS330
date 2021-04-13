#!/usr/bin/env python3
"""
Faker API
"""

import json, pyjokes
from flask import Flask, Response, jsonify

app = Flask(__name__)

@app.route("/api/v1/jokes/<category>/<language>/<int:number>")
def get_jokes(category, language, number):
    newDict = {}
    if language== "es" and category== "chuck":
        return "No Jokes about Chuck Norris in Spanish!"
    else:
        allJokes = pyjokes.get_jokes(language=language, category=category)
        jokeDict = {}

        for m in range(len(allJokes)):
            jokeDict[m] = allJokes[m]
        for n in range(number):
            newDict[n] = jokeDict[n]

        jsonify(newDict).headers["Access-Control-Allow-Origin"] = "*"
        jsonify(newDict).headers["Content-Type"] = "application/json"
        return jsonify(newDict)

@app.route("/api/v1/jokes/<category>/<language>/<int:number>/<int:id>")
def get_specific(category, language, number, id):
    if language== "es" and category== "chuck":
        return "No Kidding!"

    else:
        allJokes = pyjokes.get_jokes(language=language, category=category)
        jokeDict = {}

        for i in range(len(allJokes)):
            jokeDict[i] = allJokes[i]

        allJokes = {id:jokeDict[id]}
        return jsonify(allJokes)

if __name__ == "__main__":number
app.run("0.0.0.0")