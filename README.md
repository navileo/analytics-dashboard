# Portfolio Analytics Dashboard

A full-stack application for analyzing Indian stock portfolio performance with interactive visualizations.

## Project Structure

- **Frontend**: React application with Bootstrap for UI and Recharts for data visualization
- **Backend**: Express.js API with Swagger documentation

## Deployment Instructions

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: portfolio-analytics-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: backend

### Frontend Deployment (Netlify)

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Configure the build settings:
   - **Base directory**: frontend
   - **Build command**: `npm run build`
   - **Publish directory**: frontend/build

## Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend will run on http://localhost:5000 with API documentation available at http://localhost:5000/api-docs

### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run on http://localhost:3000

## API Endpoints

- GET `/api/portfolio/holdings` - Get all portfolio holdings
- GET `/api/portfolio/allocation` - Get portfolio allocation by sector and market cap
- GET `/api/portfolio/performance` - Get portfolio performance compared to benchmarks
- GET `/api/portfolio/summary` - Get portfolio summary with key metrics