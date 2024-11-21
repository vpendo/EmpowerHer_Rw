from pydantic import BaseModel
from typing import Optional

class ReturnUser(BaseModel):
    id: int
    username: str
    email: Optional[str]
    role: Optional[str]

    class Config:
        from_attributes = True 