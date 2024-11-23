# EmpowerHer Rwanda Platform

This repository houses a comprehensive learning and mentorship platform developed with React and FastAPI. The application empowers young women in Rwanda through technology education, mentorship, and career development opportunities.

## Features
- User Authentication & Role-based Access
- Interactive Learning Dashboard
- Mentorship System
- Course Management
- Progress Tracking
- Community Forum
- Real-time Feedback System
- Certificate Generation

## Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS
- Lucide Icons
- Axios for API Integration
- JWT Authentication

### Backend
- Python with FastAPI
- PostgreSQL Database
- SQLAlchemy ORM
- JWT Token Authentication
- Bcrypt Password Hashing

## Usage

### Prerequisites
Ensure you have the following prerequisites before setting up the application:
- Node.js (v14 or higher)
- Python 3.8+
- PostgreSQL
- pnpm package manager

### Setup

1. Clone the Repository:
`git clone https://github.com/vpendo/EmpowerHer_Rw.git`
`cd EmpowerHer_Rw`

2. Install dependencies for frontend 
## cd Frotend
`pnpm install`

3 Run client
`pnpm run dev`
Visit `http://localhost:5173/`

4. Install dependencies for backend
`cd ../Backend`
`python3 -m venv venv`
`source venv/bin/activate`
`pip install -r requirements.txt`

5.run server
`uvicorn main:app --reload`
Visit `http://127.0.0.1:8000/`






