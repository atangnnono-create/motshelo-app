from pydantic import BaseModel
from typing import Optional
from datetime import date

class Member(BaseModel):
    name: str
    phone: str
    join_date: Optional[date] = None

class Loan(BaseModel):
    member_id: str
    amount: float
    interest_rate: float = 20.0
    issue_date: date
    status: str = "active"

class Contribution(BaseModel):
    member_id: str
    month: str
    amount_paid: float

class Penalty(BaseModel):
    member_id: str
    month: str
    amount: float
    reason: Optional[str] = None
