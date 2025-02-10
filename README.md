# TaskFlow - MERN Stack Todo Application

A modern, responsive Todo List application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). TaskFlow provides an intuitive interface for managing tasks with basic CRUD operations.

### 🎯 Features
- Create, Read, Update, and Delete tasks
- Mark tasks as complete/incomplete
- Clean and modern UI with Tailwind CSS
- Responsive design for all devices
- Admin panel for task management

### 🛠️ Built With
- **Frontend:**
  - React.js (with Vite)
  - Tailwind CSS
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

### 📋 Prerequisites
- Node.js
- npm or yarn
- MongoDB

### ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/a-agouzou/Web-coding-challenge taskflow
cd taskflow
cd frontend
npm install

cd ../backend
npm install

```

2. Create a `.env` file in the `backend` directory and add the following environment variables:
```
MONGODB_URI=your_mongodb_uri
PORT=5000
```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:
```
VITE_API_URL=http://localhost:5000
```

4. Start the backend server
```bash
cd backend
npm start
```

5. Start the frontend server
```bash
cd frontend
npm start
```

6. Open your browser and visit `http://localhost:3000`

### 💭 Reflection
As a first-time MongoDB user, I learned to structure collections, use Mongoose for validation, and integrate MongoDB Atlas smoothly. The experience was straightforward and insightful