from fastapi import APIRouter
from backend.database import supabase
from backend.models import Contribution

router = APIRouter()

@router.get("/contributions")
def get_contributions():
    response = supabase.table("contributions").select("*").execute()
    return response.data

@router.get("/contributions/{member_id}")
def get_member_contributions(member_id: str):
    response = supabase.table("contributions").select("*").eq("member_id", member_id).execute()
    return response.data

@router.post("/contributions")
def add_contribution(contribution: Contribution):
    response = supabase.table("contributions").insert(contribution.dict()).execute()
    return response.data
