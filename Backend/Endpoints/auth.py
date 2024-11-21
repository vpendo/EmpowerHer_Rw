from datetime import timedelta, datetime
from fastapi import APIRouter, HTTPException, Depends
from starlette import status
from typing import Annotated
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from db.connection import db_dependency
from models import userModels
from models.userModels import User
from sqlalchemy.orm import Session
from sqlalchemy import or_
from fastapi.middleware.cors import CORSMiddleware
from schemas.schemas import CreateUserRequest, Token, FromData
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Load environment values
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

router = APIRouter(prefix="/auth", tags=["Authentication"])

# Setup password encryption and token generation
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_bearer = OAuth2PasswordBearer(tokenUrl="auth/token")

@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_user(db: db_dependency, create_user_request: CreateUserRequest):
    try:
        # Check if username exists
        check_username = db.query(User).filter(User.username == create_user_request.username).first()
        if check_username:
            raise HTTPException(status_code=400, detail="Username is already taken")
        
        # Check if email exists
        check_email = db.query(User).filter(User.email == create_user_request.email).first()
        if check_email:
            raise HTTPException(status_code=400, detail="Email is already registered")

        # Create the user
        create_user_model = User(
            username=create_user_request.username,
            email=create_user_request.email,
            password=bcrypt_context.hash(create_user_request.password),
            role="user"  # Set default role
        )

        db.add(create_user_model)
        db.commit()
        db.refresh(create_user_model)

        return {"status": "Successfully Registered"}

    except HTTPException as he:
        raise he
    except Exception as e:
        print(f"Error occurred: {e}")
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/login")
async def login(form_data: FromData, db: db_dependency):
    try:
        # Validate email and password
        if not form_data.email or not form_data.password:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Email and password are required"
            )

        # Check if the user exists based on the email
        user = db.query(userModels.User).filter(userModels.User.email == form_data.email).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )

        # Check if the provided password matches the stored hashed password
        if not bcrypt_context.verify(form_data.password, user.password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )

        return {
            "status": "Successfully logged in",
            "UserInfo": {
                "id": user.id,
                "email": user.email,
                "username": user.username,
                "role": user.role
            }
        }

    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )
