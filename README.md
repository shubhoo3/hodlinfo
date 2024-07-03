
# Hodlinfo

Hodlinfo is a web application that displays the top 10 cryptocurrency prices fetched from the WazirX API. The backend is built using Node.js and Express, and it uses MongoDB with Mongoose for data storage. The frontend is built using HTML, CSS, and JavaScript to provide a user interface similar to the provided design.

# Getting Started
## Backend Setup
### 1. Install Dependencies

Navigate to the backend directory and install the required dependencies:

cd hodlinfo/backend 

npm install


### 2. Configure MongoDB Connection

Create a file named .env in the backend directory and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string

### 3. Run the Backend Server

Start the backend server:

node index.js


## Frontend Setup
### 1. Serve the Frontend

Navigate to the frontend directory and use live-server to serve the frontend files:

cd ../frontend

live-server

## File Descriptions
### Backend
index.js: 
The main entry point of the backend application.
Sets up the Express server, connects to MongoDB, and defines the API routes.

config/db.js: Contains the MongoDB connection logic using Mongoose.
models/Crypto.js: Defines the Mongoose schema and model for storing cryptocurrency data.

routes/crypto.js: Defines the API routes for fetching and storing cryptocurrency data.

### Frontend

index.html: The main HTML file that defines the structure of the web page.

styles.css: The CSS file that styles the web page to match the provided design.

scripts.js: The JavaScript file that fetches cryptocurrency data from the backend and updates the DOM.
