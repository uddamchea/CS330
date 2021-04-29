from datetime import datetime
from flask import Flask, request, render_template, url_for, redirect

"""App config file"""

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

this_dir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////" + os.path.join(this_dir, "fundraiser.sqlite3")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
mm = Marshmallow(app)

"""Data model"""

class Client(db.Model):
    __tablename__ = "fundraiser"
    __table_args__ = {'extend_existing': True}
    id=db.Column(db.Integer, primary_key=True, autoincrement=True)
    merchant = db.Column(db.String)
    date = db.Column(db.String, default=datetime.utcnow)
    name = db.Column(db.String)
    denom = db.Column(db.Integer)
    qty = db.Column(db.Integer)
    amount = db.Column(db.Integer)
    donateTo = db.Column(db.String)
    def __repr__(self):
        return f"Client('{self.merchant}', '{self.date}', '{self.name}', '{self.denom}', '{self.qty}', '{self.amount}', '{self.donateTo}')"

class ClientSchema(mm.SQLAlchemySchema):
    class Meta:
        model = Client
        sqla_session = db.session

db.create_all()
db.session.commit()


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

       aceInput=request.form.get("aceInput")
       aceQty=request.form.get("aceQty")
       aceAmount=request.form.get("aceAmount")
       donation=Client(merchant="Ace", date=date, name=name, denom=aceInput, qty=aceQty, amount=aceAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       caseyInput=request.form.get("caseyInput")
       caseyQty=request.form.get("caseyQty")
       caseyAmount=request.form.get("caseyAmount")
       donation=Client(merchant="Casey's", date=date, name=name, denom=caseyInput, qty=caseyQty, amount=caseyAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       farewayInput=request.form.get("farewayInput")
       farewayQty=request.form.get("farewayQty")
       farewayAmount=request.form.get("farewayAmount")
       donation=Client(merchant="Fareway", date=date, name=name, denom=farewayInput, qty=farewayQty, amount=farewayAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       fiskInput=request.form.get("fiskInput")
       fiskQty=request.form.get("fiskQty")
       fiskAmount=request.form.get("fiskAmount")
       donation=Client(merchant="Fisk's", date=date, name=name, denom=fiskInput, qty=fiskQty, amount=fiskAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       dollarInput=request.form.get("dollarInput")
       dollarQty=request.form.get("dollarQty")
       dollarAmount=request.form.get("dollarAmount")
       donation=Client(merchant="Dollar Fresh", date=date, name=name, denom=dollarInput, qty=dollarQty, amount=dollarAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       kwikInput=request.form.get("kwikInput")
       kwikQty=request.form.get("kwikQty")
       kwikAMount=request.form.get("kwikAMount")
       donation=Client(merchant="Kwik Star", date=date, name=name, denom=kwikInput, qty=kwikQty, amount=kwikAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       pintersInput=request.form.get("pintersInput")
       pintersQty=request.form.get("pintersQty")
       pintersAmount=request.form.get("pintersAmount")
       donation=Client(merchant="Pinters", date=date, name=name, denom=pintersInput, qty=pintersQty, amount=pintersAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       subwayInput=request.form.get("subwayInput")
       subwayQty=request.form.get("subwayQty")
       subwayAmount=request.form.get("subwayAmount")
       donation=Client(merchant="Subway", date=date, name=name, denom=subwayInput, qty=subwayQty, amount=subwayAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       sueInput=request.form.get("sueInput")
       sueQty=request.form.get("sueQty")
       sueAmount=request.form.get("sueAmount")
       donation=Client(merchant="Sue-Z-Q's", date=date, name=name, denom=sueInput, qty=sueQty, amount=sueAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       atomicInput=request.form.get("atomicInput")
       atomicQty=request.form.get("atomicQty")
       atomicAmount=request.form.get("atomicAmount")
       donation=Client(merchant="Atomic", date=date, name=name, denom=atomicInput, qty=atomicQty, amount=atomicAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       specialInput=request.form.get("specialInput")
       specialQty=request.form.get("specialQty")
       specialAmount=request.form.get("specialAmount")
       donation=Client(merchant="Special", date=date, name=name, denom=specialInput, qty=specialQty, amount=specialAmount, donateTo=donateTo1)
       db.session.add(donation)
       db.session.commit()

       return render_template("result.html")
   return render_template("index.html")

@app.route("/manager", methods=['GET', 'POST'])
def server():
    context=Client.query.all()
    return render_template("manager.html", context=context)