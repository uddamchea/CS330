from datetime import datetime
from config import app, db, mm
from models import Client
from flask import Flask, request, render_template, url_for, redirect

db.create_all()
db.session.commit()


@app.route("/", methods=['GET', 'POST'])
def contribution():
   if request.method=="POST":
       
       merchant=request.form.get("merchant")
       date=request.form.get("date-input")
       date=datetime.strptime(date, '%Y-%m-%d').date()
       name=request.form.get("name")
       awInput=request.form.get("awInput")
       awQty=request.form.get("awQty")
       awAmount=request.form.get("awAmount")
       if request.form.get("tuition"):
           donateTo1="tuition"

       elif request.form.get("donateTo"):
           donateTo1="donateTo"
       else:
           donateTo1="adopt"

       donation=Client(merchant="A&W/LIS", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("aceInput")
       awQty=request.form.get("aceQty")
       awAmount=request.form.get("aceAmount")
       donation=Client(merchant="Ace", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("caseyInput")
       awQty=request.form.get("caseyQty")
       awAmount=request.form.get("caseyAmount")
       donation=Client(merchant="Casey's", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("farewayInput")
       awQty=request.form.get("farewayQty")
       awAmount=request.form.get("farewayAmount")
       donation=Client(merchant="Fareway", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("fiskInput")
       awQty=request.form.get("fiskQty")
       awAmount=request.form.get("fiskAmount")
       donation=Client(merchant="Fisk's", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("dollarInput")
       awQty=request.form.get("dollarQty")
       awAmount=request.form.get("dollarAmount")
       donation=Client(merchant="Dollar Fresh", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("kwikInput")
       awQty=request.form.get("kwikQty")
       awAmount=request.form.get("kwikAMount")
       donation=Client(merchant="Kwik Star", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("pintersInput")
       awQty=request.form.get("pintersQty")
       awAmount=request.form.get("pintersAmount")
       donation=Client(merchant="Pinters", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("subwayInput")
       awQty=request.form.get("subwayQty")
       awAmount=request.form.get("subwayAmount")
       donation=Client(merchant="Subway", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("sueInput")
       awQty=request.form.get("sueQty")
       awAmount=request.form.get("sueAmount")
       donation=Client(merchant="Sue-Z-Q's", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("atomicInput")
       awQty=request.form.get("atomicQty")
       awAmount=request.form.get("atomicAmount")
       donation=Client(merchant="Atomic", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       awInput=request.form.get("specialInput")
       awQty=request.form.get("specialQty")
       awAmount=request.form.get("specialAmount")
       donation=Client(merchant="Special", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       return render_template("result.html")
   return render_template("index.html")

@app.route("/manager", methods=['GET', 'POST'])
def server():
    context=Client.query.all()
    return render_template("manager.html", context=context)