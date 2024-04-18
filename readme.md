# PetPulse Backend

![PetPulse Banner](https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713422153/Your_paragraph_text_1_jux2by.png)

## Overview

PetPulse Backend is the server-side component of the PetPulse application, designed to manage pet care reminders and user authentication. It provides RESTful APIs for handling user registration, login, and reminders scheduling. PetPulse Backend ensures secure communication between the frontend and backend, allowing users to receive timely reminders for their pets' care needs.

## PetPulse Frontend

[PetPulse Frontend link](https://github.com/MichaelARestrepoross/PetPulse-Frontend)

## Technologies Used

- **Node.js**: Backend runtime environment for executing JavaScript code.
- **Express.js**: Web application framework for building RESTful APIs and handling HTTP requests.
- **PostgreSQL**: Relational database management system for storing user data and pet care reminders.
- **Socket.IO**: Library for enabling real-time, bidirectional communication between clients and servers using WebSockets.
- **JSON Web Tokens (JWT)**: Token-based authentication mechanism for securing API endpoints and user sessions.
- **bcrypt**: Library for hashing passwords before storing them in the database, enhancing security.
- **Node Schedule**: Library for scheduling recurring tasks, such as sending pet care reminders at specific times.

## Features

- **User Authentication**: Implements token-based authentication for secure user login and registration.
- **Pet Care Reminders**: Enables users to schedule and receive reminders for pet care tasks, including feeding, medication, and vet appointments.
- **Scheduled Jobs**: Utilizes Node Schedule to schedule recurring tasks for sending pet care reminders at specified intervals.
- **Real-time Updates**: Integrates Socket.IO to provide real-time updates and notifications to users when new reminders are due.
- **Data Persistence**: Stores user data, including pet profiles and reminders, in a PostgreSQL database, ensuring data durability and reliability.
- **Error Handling**: Implements robust error handling mechanisms to gracefully handle unexpected errors and exceptions.

## Getting Started

To set up PetPulse Backend locally on your machine, follow these steps:

1. **Clone the Repository**: 
   ```sh
   git clone <repository-url>
   cd petpulse-backend
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Database**:
   - Create a PostgreSQL database and configure the connection details in the `.env` file.
   - Run database migrations to create the necessary tables:
     ```sh
     npm run migrate
     ```

4. **Start the Server**:
   ```sh
   npm start
   ```

**Create .env and fill out the info**
 ```sh
    PORT=
    PG_HOST=
    PG_PORT=
    PG_DATABASE= 
    PG_USER=
    JWT_SECRET=
```
