from fastapi import APIRouter
from database import supabase
from models import Member

router = APIRouter()

@router.get("/members")
def get_members():
    response = supabase.table("members").select("*").execute()
    return response.data

@router.post("/members")
def add_member(member: Member):
    response = supabase.table("members").insert(member.dict()).execute()
    return response.data

@router.delete("/members/{member_id}")
def delete_member(member_id: str):
    response = supabase.table("members").delete().eq("id", member_id).execute()
    return {"message": "Member deleted"}
