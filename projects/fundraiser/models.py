"""Data model"""

from config import db, mm
from datetime import datetime

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