# Student Management API with Express.js

This is a simple Node.js application using Express.js for managing student data. It provides endpoints to retrieve a list of students, add a new student, and retrieve a specific student's information.

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your development machine.
- `students.json` file with initial student data.

### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/Plissi/student-hub-backend.git

2. Navigate to the project directory:

   ```sh
   cd student-hub-backend

3. Navigate to the project directory:

   ```sh
   npm install

### Configuration
Before running the application, create a .env file in the project root and configure the following environment variables:

   ```dotenv
   PORT=3000
   ```

You can adjust the PORT to your desired port number.

Starting the Server
Run the following command to start the Express.js server:

   ```sh
   npm start
   ```
The server will start listening on the specified port, and you'll see a message in the console: "Server is listening on port 3000 (or your specified port)."

### API Endpoints
1. Get All Students
   * Endpoint: /students 
   * Method: GET 
   * Description: Get a list of all students. 
   * Example: GET http://localhost:3000/students
2. Add a New Student
   * Endpoint: /student
   * Method: POST
   * Description: Add a new student to the database.
   * Request Body:
   ```json
   {
     "name": "John",
     "lastName": "Doe",
     "school": "Example School"
   }
   ```
   * Example: POST http://localhost:3000/student
3. Get Student by ID
   * Endpoint: /students/:id
   * Method: GET
   * Description: Get a specific student's information by their ID.
   * Example: GET http://localhost:3000/students/1

### Frontend Repository

The frontend of this application is available in a separate repository. You can find the code and more information 
[here](https://github.com/Plissi/student-hub-frontend).


