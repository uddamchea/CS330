
#!/usr/bin/env python3
"""Flask application to use `pyjokes`"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request, make_response, url_for, redirect

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    language_of_jokes = request.cookies.get("language_of_jokes")
    type_of_jokes = request.cookies.get("type_of_jokes")
    number_of_jokes = request.cookies.get("number_of_jokes")

    if language_of_jokes and type_of_jokes and number_of_jokes:
        return render_template("base.html", list_of_jokes = send_joke(language_of_jokes, type_of_jokes, number_of_jokes))
    else:
        return render_template("base.html")

    raise NotImplementedError


@app.route("/", methods=["POST"])
def index_jokes():
    fetch = make_response(redirect(url_for("index"), code=303))
    fetch.set_cookie("language_of_jokes", request.form.get("language"))
    fetch.set_cookie("type_of_jokes", request.form.get("category"))
    fetch.set_cookie("number_of_jokes", request.form.get("number"))
    return fetch

    raise NotImplementedError


def send_joke(
    language: str = "en", category: str = "all", number: int = 1
) -> List[str]:

    if language=="es" and category=="chuck":
        return(["No jokes about Chuck Norris in Spanish"])

    get_jokes = pyjokes.get_jokes(language=language, category=category)
    jokeList = []

    for index in range(int(number)):
        jokeList.append(get_jokes[index])
    return jokeList

    raise NotImplementedError
