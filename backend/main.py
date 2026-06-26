from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import members, loans, contributions, penalties, dividends

app = FastAPI(
    title="Motshelo API",
    description="Savings group management API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(members.router)
app.include_router(loans.router)
app.include_router(contributions.router)
app.include_router(penalties.router)
app.include_router(dividends.router)

@app.get("/")
def root():
    return {"message": "Motshelo API is running!"}

@app.get("/health")
def health():
    return {"status": "ok"}
