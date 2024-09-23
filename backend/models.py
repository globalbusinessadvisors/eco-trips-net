from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    phone_number = Column(String)
    is_verified = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    role = Column(String)
    auth_provider = Column(String)

class UserCreate(BaseModel):
    email: str
    password: str
    first_name: str = None
    last_name: str = None
    phone_number: str = None

class UserUpdate(BaseModel):
    first_name: str = None
    last_name: str = None
    phone_number: str = None
    is_verified: bool = None
    role: str = None

class UserResponse(BaseModel):
    id: int
    email: str
    first_name: str = None
    last_name: str = None
    phone_number: str = None
    is_verified: bool
    created_at: datetime
    updated_at: datetime
    role: str
    auth_provider: str

    class Config:
        orm_mode: True
