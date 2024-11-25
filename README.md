# EmpowerHer Rwanda Platform

This repository a comprehensive learning and mentorship platform developed with React and FastAPI. The application empowers young women in Rwanda through technology education, mentorship, and career development opportunities.

## Features
- User Authentication & Role-based Access
- Interactive Learning Dashboard
- Mentorship System
- Course Management
- Progress Tracking


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

   
   ```
   https://github.com/vpendo/EmpowerHer_Rw.git

   cd EmpowerHer_Rw
   ```

2.Set Up the Frontend:

```
cd frontend

```
- Install dependencies:
  
  ```
  pnpm install

  ```
- Configure the .env file

  ```
  pnpm  run dev 

  ```

3. Set Up the Backend:
 - Navigate to the backend folder
   
   ```
   cd backend
   ```
 - Create a virtual environment and activate it:
     
     ```
     python3 -m venv venv
     source venv/bin/activate  or  `venv\Scripts\activate`

     ```
 - Install dependencies:
   
   ```
   pip install -r requirements.txt

   ```
 - Start the FastAPI server:
   
   ```
   uvicorn main:app --reload

   ```
4. Access the Application in your browser

  - Frontend :
   ```
   http://localhost:5173/
   ```
- Backend API documentation

``` 
  http://127.0.0.1:8000
 ```
## License
This project is licensed under the MIT License. See the LICENSE file for more information.
## Educational Purpose
This project is designed for educational purposes by the EmpowerHer. Feel free to explore, modify, and learn from the codebase. If you have questions, suggestions, or ideas, please create an issue in the repository or reach out directly.

Happy coding and empowering! 🎉

   
   






