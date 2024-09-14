# Event Management System

## Project Overview

The **Event Management System** is a web-based application designed to streamline the process of managing events, RSVPs, scheduling, reminders, and notifications. It allows users to create events, manage attendees, send reminders, and receive in-app notifications. This application is built using **Node.js**, **Express**, and **MongoDB** for the backend, and **HTML**, **CSS**, and **JavaScript** for the frontend.

## Features

- **Event Creation**: Users can create events with title, description, date, time, and location.
- **RSVP Management**: Attendees can RSVP to events, and the system will manage the list of responses.
- **Event Scheduling**: Allows users to schedule events in advance with specific dates and times.
- **Attendee Management**: View and manage the list of attendees for each event.
- **Reminders**: The system can send reminders for upcoming events.
- **In-app Notifications**: Real-time notifications are sent to users for important event updates. 
- **Email Notifications**: Optional feature to send notifications via email.
  
## Tech Stack

### Backend:
- **Node.js**: JavaScript runtime used to handle server-side operations.
- **Express.js**: Web framework for creating the server and API routes.
- **MongoDB**: NoSQL database for storing event data and attendees.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

### Frontend:
- **HTML**: Structuring the user interface.
- **CSS**: Styling the application (dark theme support).
- **JavaScript**: Client-side logic to manage interactivity.

## Installation & Setup

### Prerequisites

Before running this project, ensure you have the following installed on your local machine:

- **Node.js**: Download and install from [Node.js](https://nodejs.org/)
- **MongoDB**: Download and install from [MongoDB](https://www.mongodb.com/try/download/community)


# Directory Structure

event-management-backend/
│
├── server.js              # Main server file
├── models/                # Folder for database models (e.g., Event model)
│   └── event.js
├── routes/                # Folder for API routes
│   └── eventRoutes.js
├── package.json           # Node package configuration
└── frontend/              # Place your frontend files (HTML, CSS, JavaScript)
    ├── index.html
    ├── style.css
    └── script.js
