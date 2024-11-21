from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float
from sqlalchemy.sql import func
from db.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255), unique=True, index=True)
    email = Column(String, unique=True, index=True, nullable=True)
    role = Column(String, nullable=True)
    password = Column(String) 
    date_created = Column(DateTime(timezone=True), server_default=func.now())
    is_verified = Column(Boolean, default=False)
    


class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    course_type = Column(String)
    course_owner = Column(String)
    course_image = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())



  