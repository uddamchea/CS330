#!/usr/bin/env python3
"""
Faker API
"""

import json, pyjokes
from flask import Flask, Response, jsonify
from flask_cors import CORS, cross_origin
from faker import Faker

app = Flask(__name__)

@app.route("/api/v1/jokes/<category>/<language>/<int:number>")
def get_joke(language, category, number):
    if language== "es" and category== "chuck" and number == 1:
        return "No Kidding!"

    else:

        jokes = pyjokes.get_jokes(language=language, category=category)
        dic = {}

        for i in range(len(jokes)):
            dic[i] = jokes[i]

        jokes = jsonify(dic)
        jokes.headers["Access-Control-Allow-Origin"] = "*"
        jokes.headers["Content-Type"] = "application/json"
        return jokes
        #return jsonify(jokes = pyjokes.get_jokes(language=language, category=category))

@app.route("/api/v1/address")
@cross_origin()
def get_address():
    return jsonify(address=fake.address())


if __name__ == "__main__":number
app.run("0.0.0.0")