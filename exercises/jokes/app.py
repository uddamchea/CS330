#!/usr/bin/env python3
"""Flask application to use `pyjokes`"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return render_template("base.html", name="CS330")


@app.route("/", methods=["POST"])
def index_jokes():
    return render_template("jokes.html")


def send_joke(
    language: str = "en", category: str = "all", number: int = 1
) -> List[str]:
    jokes = pyjokes.get_jokes(language='en', category= 'neutral')

    for i in range(10):
        print(i+1,".",jokes[i])
