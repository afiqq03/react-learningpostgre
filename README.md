# Todo Application

A full-stack Todo application built with React, Node.js, Express, and PostgreSQL. This project demonstrates a modern web application with a clean, responsive UI and RESTful API architecture.

## Features

- ✨ Create, read, and delete todos
- 🎨 Modern, responsive UI design
- 🔄 Real-time updates
- 🎯 RESTful API architecture
- 💾 PostgreSQL database integration
- 🛡️ Error handling and validation

## Tech Stack

### Frontend
- React.js
- Vite
- CSS3 with modern styling
- Fetch API for HTTP requests

### Backend
- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client for Node.js)

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up the database:
```sql
CREATE DATABASE servertest;
```

5. Create the required table:
```sql
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

6. Create a `.env` file in the backend directory with the following variables:
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=servertest
DB_PASSWORD=your_postgres_password
DB_PORT=5432


## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `DELETE /todos/:id` - Delete a todo by ID

## Project Structure
todo-app/
├── backend/
│ ├── index.js
│ ├── db.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── InputTodo.jsx
│ │ │ └── ListTodos.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── public/
└── README.md
