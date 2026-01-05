# Synema – Movie Ticket Booking Platform (Frontend)

## Overview
**Synema** is a full-stack movie ticket booking platform designed to support multiple cinemas, multiple screens, and real-time seat-based bookings within a single system. The application focuses on providing a smooth and reliable booking experience for users while offering dedicated management interfaces for cinemas and system administrators.

This repository contains the **frontend application**, developed using **React and TypeScript**, with an emphasis on usability, performance, and responsive design across devices.

From a user perspective, Synema allows users to browse and search movies by title, genre, or cinema, view complete movie details (including trailers and cast information), and check showtimes for the same movie across different cinemas and screens. Users can also search by cinema to find nearby cinemas and view the movies currently playing at a selected cinema along with their available showtimes and ticket prices.

During the booking process, users select seats from an interactive seat layout. Once a seat is selected, it is temporarily locked for 5 minutes to allow the user to complete the booking. If the booking is not completed within this time window, the session expires and the locked seats are automatically released, allowing other users to select them. This seat-locking mechanism is implemented using Redis, ensuring that double-booking is prevented even when multiple users attempt to book seats simultaneously.

An advanced feature of the platform is AI-generated movie summaries, which are produced using the Grok AI model. This enhances the user experience by providing concise and informative summaries beyond standard movie descriptions.

Synema provides a dedicated interface for cinema owners, allowing cinemas to register on the platform with login access granted only after approval by the system administrator, ensuring controlled onboarding and platform integrity. Once approved, cinema users can log in to manage their cinema profile, add and configure screens, select and manage movies to be screened, create and update showtimes for each screen, and view bookings made by users for their cinema. This functionality enables cinema owners to independently manage their day-to-day operations while remaining seamlessly integrated with the central Synema system.

The Synema administration panel provides system-level control for managing the entire platform. Administrators can approve or reject cinema registrations, manage cinemas, screens, and movies, and oversee user, cinema, and admin accounts. In addition, administrators are responsible for controlling primary system features such as promotional banners and featured content, ensuring data consistency, platform security, and smooth overall operation. This centralized administration layer enables effective monitoring, moderation, and scalability of the Synema platform.

Overall, Synema delivers a modern, scalable, and real-world movie booking experience that reflects industry-level application design and development practices.