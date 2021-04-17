import requests
from flask import Flask, request, render_template, send_from_directory
from flask import redirect, url_for
import records

app = Flask(__name__)

COUNTRY = []
REGION = []
CONTINENT = []
CACHE = {}


def get_data_from_db(query: str, user: str, host: str, port: int, dbname: str) -> list:
    db = records.Database(f"postgresql://{user}:@{host}:{port}/{dbname}")
    rows = db.query(query)
    return rows

@app.route("/", methods=["GET", "POST"])
def index():
    global CACHE

    if request.method == "GET":
        return render_template("index.html")
        
    if request.form.get("country"):
        country = request.form.get("country")
        if country in CACHE:
            result = CACHE[country]
        else:
            result = get_data_from_db(
                host="localhost",
                port=2345,
                user="cheara01",
                dbname="world",
                query=f"select * from country where code = '{country}';",
            )
            CACHE[country] = result
        return render_template("result.html", rows=result)

    if request.form.get("region"):
        region = request.form.get("region")
        if region in CACHE:
            result = CACHE[region]
        else:
            result = get_data_from_db(
                host="localhost",
                port=2345,
                user="cheara01",
                dbname="world",
                query=f"select * from country where region = '{region}';",
            )
            CACHE[region] = result
        return render_template("result.html", rows=result)

    if request.form.get("continent"):
        continent = request.form.get("continent")
        if continent in CACHE:
            result = CACHE[continent]
        else:
            result = get_data_from_db(
                host="localhost",
                port=2345,
                user="cheara01",
                dbname="world",
                query=f"select * from country where continent = '{continent}';",
            )
            CACHE[continent] = result
        return render_template("result.html", rows=result)

@app.route("/<string:scope>")
def search(scope: str):
    if scope == "country":
        global COUNTRY
        if not COUNTRY:
            COUNTRY = get_data_from_db(
                host="localhost",
                port=2345,
                user="cheara01",
                dbname="world",
                query="select code, name from country;",
        )
        return render_template("country.html", options=COUNTRY)

    elif scope == "region":
        global REGION
        if not REGION:
            REGION = get_data_from_db(
                host="localhost",
                port=2345,
                user="cheara01",
                dbname="world",
                query="select distinct region from country;",
        )
        return render_template("region.html", options=REGION)

    elif scope == "continent":
        global CONTINENT
        if not CONTINENT:
            CONTINENT = get_data_from_db(
                host="localhost",
                port=2345,
                user="cheara01",
                dbname="world",
                query="select distinct continent from country;",
        )
        return render_template("continent.html", options=CONTINENT)