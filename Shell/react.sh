#!/bin/bash

# 1. Navigate to your Maven project root directory (make sure you're in the correct folder)
echo "Please ensure you're in the correct project directory."

# 2. Create a new React app using Vite
echo "Creating React app with Vite..."
npm create vite@latest frontend -- --template react

# 3. Navigate into the frontend directory
echo "Navigating into the frontend directory..."
cd frontend

# 4. Install react-router-dom
echo "Installing react-router-dom..."
npm install react-router-dom


# 4. Install dependencies
echo "Installing dependencies..."
npm install

# 5. Start the React development server
echo "Starting React development server..."
npm run dev

echo "React frontend is now set up and running at http://localhost:5173"
