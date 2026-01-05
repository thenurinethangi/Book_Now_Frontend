# Synema – Movie Ticket Booking Platform (Frontend)

## Overview
**Synema** is a full-stack movie ticket booking platform designed to support multiple cinemas, multiple screens, and real-time seat-based bookings within a single system. The application focuses on providing a smooth and reliable booking experience for users while offering dedicated management interfaces for cinemas and system administrators.

This repository contains the **frontend application**, developed using **React and TypeScript**, with an emphasis on usability, performance, and responsive design across devices.

**From a user perspective**, Synema allows users to browse and search movies by title, genre, or cinema, view complete movie details (including trailers and cast information), and check showtimes for the same movie across different cinemas and screens. Users can also search by cinema to find nearby cinemas and view the movies currently playing at a selected cinema along with their available showtimes and ticket prices.

During the booking process, users select seats from an interactive seat layout. Once a seat is selected, it is temporarily locked for 5 minutes to allow the user to complete the booking. If the booking is not completed within this time window, the session expires and the locked seats are automatically released, allowing other users to select them. This seat-locking mechanism is implemented using Redis, ensuring that double-booking is prevented even when multiple users attempt to book seats simultaneously.

An advanced feature of the platform is AI-generated movie summaries, which are produced using the Grok AI model. This enhances the user experience by providing concise and informative summaries beyond standard movie descriptions.

Synema provides a dedicated interface for **cinema owners**, allowing cinemas to register on the platform with login access granted only after approval by the system administrator, ensuring controlled onboarding and platform integrity. Once approved, cinema users can log in to manage their cinema profile, add and configure screens, select and manage movies to be screened, create and update showtimes for each screen, and view bookings made by users for their cinema. This functionality enables cinema owners to independently manage their day-to-day operations while remaining seamlessly integrated with the central Synema system.

**The Synema administration panel** provides system-level control for managing the entire platform. Administrators can approve or reject cinema registrations, manage cinemas, screens, and movies, and oversee user, cinema, and admin accounts. In addition, administrators are responsible for controlling primary system features such as promotional banners and featured content, ensuring data consistency, platform security, and smooth overall operation. This centralized administration layer enables effective monitoring, moderation, and scalability of the Synema platform.

Overall, Synema delivers a modern, scalable, and real-world movie booking experience that reflects **industry-level application design and development practices**.


## Technologies and tools used

#### Frontend

- React.js (with TypeScript) -
Used to build a component-based, scalable, and type-safe user interface for the application.

- Redux Toolkit -
Handles global state management, including user authentication, booking flow, and seat selection state.

- Tailwind CSS -
Provides a modern, responsive, and consistent UI design with utility-first styling.

- React Router -
Manages client-side routing and role-based navigation within the application.

- Axios -
Used for handling HTTP requests and communication with the backend API.

#### Backend

- Node.js -
Provides the runtime environment for executing server-side JavaScript.

- Express.js -
Used to build a RESTful API and handle routing, middleware, and request processing.

- MongoDB -
Serves as the primary database for storing users, cinemas, movies, screens, showtimes, and bookings.

- Mongoose -
Acts as an ODM to model application data and enforce schema validation.

- Redis -
Implements real-time seat locking with automatic timeout handling to prevent double bookings.

- JWT (JSON Web Tokens) -
Used for secure authentication and role-based authorization.

- Nodemailer -
Sends email ex: booking confirmation containing ticket details, email verify otp

#### AI & Advanced Features

- Grok AI Model -
Generates AI-powered movie summaries to enhance the movie discovery experience.

- Redis-based Concurrency Control -
Ensures consistent seat availability when multiple users attempt bookings simultaneously.

#### Development & Deployment

- Git & GitHub -
Used for version control and project collaboration.

- Postman -
Used for testing and validating API endpoints during development.

- Render / Railway -
Used for deploying and hosting the frontend and backend services.


## Setup and Run Instructions

This project consists of two separate applications:

- Frontend – React-based client application
- Backend – Node.js & Express REST API

Both applications must be set up and run separately.

#### Prerequisites

Ensure the following are installed on your system:

- Node.js (v18 or later)
- npm or yarn
- MongoDB (local or cloud instance)
- Redis Server (for seat locking functionality)

#### Frontend Setup

1. Clone the Frontend Repository
git clone https://github.com/your-username/synema-frontend.git
cd synema-frontend
