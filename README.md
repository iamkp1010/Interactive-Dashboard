# Interactive Dashboard

## Setup and Running the Application (Docker)

- Build and run the Docker containers:

```
docker-compose up --build
```

- Access the application at `http://localhost:3000`

## Libraries and Tools Used

Backend:

- Django
- Django REST Framework

Frontend:

- Next.js
- React
- Redux (with @reduxjs/toolkit)
- Recharts for chart visualization
- Axios for API requests

Development and Deployment:

- Docker for containerization

## Approach and Thought Process

- Containerized Architecture: Used Docker to ensure consistent development and deployment environments for both frontend and backend.

- Decoupled Services: Separated frontend and backend into distinct containers for improved scalability and maintainability.

- Data Visualization: Implemented multiple chart types (Candlestick, Line, Bar, Pie) using Recharts to demonstrate versatility in data representation.

- State Management: Utilized Redux for efficient state management across components.

- API Integration: Created a Django backend to serve mock data, simulating real-world data fetching scenarios.

- User Interaction: Implemented a simple tab-based navigation for switching between chart types, prioritizing user experience.

- Responsive Design: Ensured the dashboard is accessible and functional across different device sizes.
