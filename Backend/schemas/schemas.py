from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# User Schemas
class CreateUserRequest(BaseModel):
    username: str
    password: str
    email: Optional[str] = None
    role: Optional[str] = None

class UserResponse(BaseModel):
    id: int
    username: str
    email: Optional[str]
    role: Optional[str]

    class Config:
        from_attributes = True

class Token(BaseModel):
    status: str
    UserInfo: Optional[dict]
    access_token: Optional[str]
    token_type: Optional[str]
    detail: Optional[str] = None

class FromData(BaseModel):
    email: EmailStr
    password: str

# Course Schemas
class CourseBase(BaseModel):
    title: str
    description: str
    course_type: str
    course_owner: str
    course_image: str

class CourseCreate(CourseBase):
    pass

class CourseUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    course_type: Optional[str] = None
    course_owner: Optional[str] = None
    course_image: Optional[str] = None

class CourseResponse(CourseBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class ErrorResponse(BaseModel):
    detail: str