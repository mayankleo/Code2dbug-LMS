# LMS Portal (Full Stack MERN Project)

This is the root directory for the LMS Portal project. This project is a monorepo containing two separate applications:

-   `/client`: The React + Tailwind frontend application.
-   `/server`: The Express + Node.js + MongoDB backend API.

## Project Structure

```
lms-portal/
├── client/     (React App)
├── server/     (Express API)
└── README.md
```

## Quick Start

1.  **Install Client Dependencies:**
    ```bash
    cd client
    npm install
    ```

2.  **Install Server Dependencies:**
    ```bash
    cd ../server
    npm install
    ```

3.  **Run Both Apps Concurrently:**
    (You can use a tool like `concurrently` in the root `package.json` for this, or run them in separate terminals).

    * **Terminal 1 (Server):**
        ```bash
        cd server
        npm run dev  // (Runs nodemon)
        ```
    * **Terminal 2 (Client):**
        ```bash
        cd client
        npm run dev  // (Runs Vite/React)
        ```
