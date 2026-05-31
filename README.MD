# Personal Project Showcase App

A full-stack React application built with Vite and React Router v6 for managing technical project portfolios. It connects to a local JSON backend to deliver full CRUD features.

---
```text
## Project Structure

Project-Showcase-App/
├── db.json # Backend database file
├── index.html # App entry document
├── package.json # Scripts & project dependencies
├── vite.config.js # App compiler configuration
└── src/
├── App.css # Global styling sheet
├── App.jsx # Root router view coordinator
├── main.jsx # App mount script
├── setupTests.js # Testing framework configuration
├── components/ # Reusable presentation parts
│ ├── Header.jsx
│ ├── ProjectForm.jsx
│ ├── ProjectItem.jsx
│ ├── ProjectList.jsx
│ └── SearchBar.jsx
├── hooks/ # Custom hook logic
│ └── useFetch.jsx
└── pages/ # Navigation page layouts
├── AdminPanel.jsx
├── Home.jsx
└── Showcase.jsx
```
---

## Setup & Execution Instructions

### 1. Clone and Install Dependencies

Open your terminal, clone the repository, and install the project packages:

    git clone https://github.com/0xJBS/Personal-Project-Showcase-App.git
    cd Project-Showcase-App
    npm install

### 2. Run the Mock Backend Server

Open a terminal tab and run the mock database API using json-server on port 5001:

    npx json-server --watch db.json --port 5001

_(Keep this window open and running! It hosts the API endpoints needed for fetching data.)_

### 3. Run the Frontend Client Application

Open a second terminal tab and start the Vite development server:

    npm run dev

_Click the local address link generated in your terminal (usually http://localhost:5173) to load the application in your browser._

### 4. Run the Automation Tests

Open a third terminal tab to execute the component test suites via Vitest:

    npm run test

---

## Features

- Custom and Standard Hooks: Uses standard hooks (useState, useEffect) alongside a custom useFetch hook to cleanly manage network asynchronous state and data fetching.
- Client-Side Routing: Dynamic multi-view navigation layout managed via React Router v6 between Home, Showcase, and Admin pages.
- Full CRUD Functionality:
  - Create: Add new projects using the ProjectForm (POST).
  - Read: Display all portfolio metrics dynamically (GET).
  - Update: Update project attributes, such as inline like counters (PATCH).
  - Delete: Remove a project from the collection via the Admin Panel (DELETE).
- Testing Suite: Automated component assertion and user-event simulation configured via Vitest and React Testing Library.

---

## Git Management Workflow

To satisfy the version control criteria, development was executed using strict branching and PR workflows:

1. Feature Branching: Features were developed on isolated branches:
   git checkout -b feature/showcase-app-architecture

2. Pull Requests & Merging: Changes were staged, committed, and merged into the main branch following successful code review and test passage:
   git add .
   git commit -m "feat: implement modular layout architecture and CRUD logic"
   git checkout main
   git merge feature/showcase-app-architecture

3. Branch Clearance: Stale feature branches were safely deleted locally and remotely after consolidation:
   git branch -d feature/showcase-app-architecture

---

## Limitations

- Server Dependency: The backend mock server must be explicitly running on port 5001. If it is closed or bound to a different port, the UI components will display a 'Failed to Fetch' error.
- Local Boundary: Configured natively for a local environment; does not include production authentication layers or secure session token encryption.
