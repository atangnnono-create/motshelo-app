from fastapi import APIRouter
from backend.database import supabase
from backend.models import Penalty

router = APIRouter()

@router.get("/penalties")
def get_penalties():
    response = supabase.table("penalties").select("*").execute()
    return response.data

@router.get("/penalties/{member_id}")
def get_member_penalties(member_id: str):
    response = supabase.table("penalties").select("*").eq("member_id", member_id).execute()
    return response.data

@router.post("/penalties")
def add_penalty(penalty: Penalty):
    response = supabase.table("penalties").insert(penalty.dict()).execute()
    return response.data
