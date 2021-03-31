#!/usr/bin/env python3
"""Flask application to use `pyjokes`"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request, make_response, redirect, url_for

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    """Render the template with form"""
    return render_template("base.html", name="CS330")
    raise NotImplementedError


@app.route("/", methods=["POST"])
def index_jokes():
    """Render the template with jokes"""
    return render_template("jokes.html")
    raise NotImplementedError


def send_joke(
    language: str = "en", category: str = "all", number: int = 1
) -> List[str]:
    """Return a list of jokes"""
    list_of_jokes = pyjokes.get_jokes(language="eng", category="chuck")
    return list_of_jokes
    raise NotImplementedError