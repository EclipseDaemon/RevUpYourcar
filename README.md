# Car Inventory Management System

This is a full-stack web application for managing a car inventory. The application allows users to add, view, and delete car entries. The frontend is built with React, and the backend is powered by Express.js, with data stored in MongoDB Atlas.

## Features
- **Add Cars**: Users can add new car entries by providing details such as the car's name, model, and price.
- **List Cars**: View all car entries in the inventory.
- **Delete Cars**: Remove a car entry from the inventory.

## Technology Stack

### Frontend
- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB Atlas (cloud-hosted)
- **Environment Variables**: dotenv

### Deployment
- **Frontend**: Deployed on Netlify
- **Backend**: Deployed on Render

---

## Project Structure

### Frontend
```plaintext
front/
├── public/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── AddCars.jsx
│   │   └── ListCars.jsx
│   ├── App.jsx
│   ├── index.html
│   ├── main.jsx
├── tailwind.config.js
└── vite.config.js
```

### Backend
```plaintext
server/
├── config/
├── Controllers/
├── middleware/
├── models/
├── Routes/
├── .env
├── server.js
└── Constants.js
```

---

## Setup and Installation

### Prerequisites
- Node.js installed on your system
- MongoDB Atlas connection string

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to Folders**:
   ```bash
   cd front
   ```

3. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

4. **Start Frontend**:
   ```bash
   npm run dev
   ```

5. **Navigate to the Backend Folder**:
   ```bash
   cd ../server
   ```

6. **Install Backend Dependencies**:
   ```bash
   npm install
   ```

7. **Set Up Environment Variables**:
   Create a `.env` file in the `server` folder with the following:
   ```plaintext
   MONGO_URI=<your-mongodb-atlas-connection-string>
   PORT=5000
   ```

8. **Start Backend**:
   ```bash
   npm start
   ```

9. **Access the Application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

---

## Deployment

### Frontend on Netlify
1. Build the frontend for production:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder on Netlify.

### Backend on Render
1. Push your backend code to a GitHub repository.
2. Connect the repository to Render and set up the environment variables (e.g., `MONGO_URI` and `PORT`).
3. Deploy the backend on Render.

---

## API Endpoints

### Base URL
- Local: `http://localhost:5000`
- Production: `https://your-backend.onrender.com`

### Endpoints
| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | `/carentries`          | Fetch all car entries    |
| POST   | `/carentries`          | Add a new car entry      |
| DELETE | `/carentries/:carId`   | Delete a car entry       |

---

## Future Enhancements
- Implement user authentication.
- Add search and filter functionality for cars.
- Enable image uploads for car entries.
- Deploy both frontend and backend to production.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- MongoDB Atlas for cloud database hosting.
- Render and Netlify for deployment platforms.
- Tailwind CSS for styling support.

