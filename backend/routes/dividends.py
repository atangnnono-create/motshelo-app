from fastapi import APIRouter
from backend.database import supabase

router = APIRouter()

@router.get("/dividends")
def get_dividends():
    response = supabase.table("dividends").select("*").execute()
    return response.data

@router.get("/dividends/{member_id}")
def get_member_dividends(member_id: str):
    response = supabase.table("dividends").select("*").eq("member_id", member_id).execute()
    return response.data
