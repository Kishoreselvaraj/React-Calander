# React Calendar Application

## Overview

This repository contains a React-based calendar application developed as part of a technical assessment for Grey Scientific Labs. The application allows users to view, add, edit, and delete events. Additionally, it displays Indian government holidays and special days.

## Features

- **Calendar View**: Displays a monthly calendar with events.
- **Add Event**: Users can add new events by clicking on a date.
- **Edit Event**: Modify details of an existing event.
- **Delete Event**: Remove events from the calendar.
- **Event Details**: View details of an event in a modal.
- **Filter Events**: Filter events by category (e.g., Work, Personal).
- **Indian Government Holidays**: Special days like Republic Day, Independence Day, and Diwali are highlighted on the calendar.

## Technical Requirements

- **State Management**: Utilizes React's state management with hooks (`useState`, `useEffect`, `useContext`).
- **Routing**: Implemented with React Router for navigation between views.
- **API Integration**: Uses Beeceptor to mock API requests for event management.
- **Styling**: Responsive design achieved with CSS-in-JS (styled-components).
- **Error Handling**: Provides user feedback in case of errors (e.g., API errors).
- **Deployment**: Deployed using [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/react-calendar-app.git
   cd react-calendar-app
2. Install dependencies:
    ```bash
    npm install