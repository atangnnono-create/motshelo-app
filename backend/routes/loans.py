from fastapi import APIRouter
from database import supabase
from models import Loan

router = APIRouter()

@router.get("/loans")
def get_loans():
    response = supabase.table("loans").select("*").execute()
    return response.data

@router.get("/loans/{member_id}")
def get_member_loans(member_id: str):
    response = supabase.table("loans").select("*").eq("member_id", member_id).execute()
    return response.data

@router.post("/loans")
def add_loan(loan: Loan):
    response = supabase.table("loans").insert(loan.dict()).execute()
    return response.data

@router.patch("/loans/{loan_id}")
def update_loan(loan_id: str, status: str):
    response = supabase.table("loans").update({"status": status}).eq("id", loan_id).execute()
    return response.data
