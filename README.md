# Actor Favorites App

Video Link: https://asset.cloudinary.com/dxgsrugvo/bf4c385dceb9a5dbcaf1f9a95744408c

A React application that allows you to browse actors and actresses, view their details, and save your favorites. Built with React, Material-UI, and the TMDB API.

## Features

- Browse popular actors and actresses
- Search for specific actors
- View detailed information about each actor
- See their filmography
- Save favorite actors to a local list
- Responsive design that works on all devices

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- TMDB API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Get a TMDB API key:
   - Go to [TMDB](https://www.themoviedb.org/)
   - Create an account
   - Go to your profile settings
   - Click on "API" in the left sidebar
   - Request an API key
   - Copy your API key

4. Replace the API key in the following files:
   - `src/pages/Home.jsx`
   - `src/pages/ActorDetails.jsx`
   Replace `YOUR_TMDB_API_KEY` with your actual API key.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Usage

- Browse actors on the home page
- Use the search bar to find specific actors
- Click on an actor's card to view their details
- Click the heart icon to add/remove actors from your favorites
- View your favorite actors in the Favorites page

## Technologies Used

- React
- React Router
- Material-UI
- Axios
- TMDB API
