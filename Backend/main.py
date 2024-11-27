from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Endpoints import auth, courses
from db.database import engine
from models import userModels

app = FastAPI(
    title="EmpowerHer API",
    description="API for EmpowerHer Application",
    version="1.0.0"
)

# Configure CORS with specific origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://localhost:5174","https://empowerherw.netlify.app/"],  # Use your frontend URL instead of wildcard
    allow_credentials=True,  # Allow cookies and credentials
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Create database tables
userModels.Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth.router)
app.include_router(courses.router)

@app.get("/", tags=["Root"])
def read_root():
    return {
        "message": "Welcome to EmpowerHerAPI",
        "docs": "/docs",
        "redoc": "/redoc"
    }

