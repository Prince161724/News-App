# News App

A modern React-based news application that fetches the latest news from NewsAPI.org.

## Features
- Browse news by categories (General, Business, Entertainment, Health, Science, Sports, Technology)
- Responsive design with progress indicators
- Real-time news updates
- Clean and intuitive user interface

## Quick Start

### 1. Get API Key
- Sign up at [NewsAPI.org](https://newsapi.org/) to get your free API key

### 2. Environment Setup
- Copy `.env.example` to `.env`
- Add your API key: `REACT_APP_API_KEY=your_api_key_here`

### 3. Install & Run
```bash
npm install
npm start
```

## Deployment
See `DEPLOYMENT.md` for detailed deployment instructions for Render and other platforms.

## Technologies Used
- React 19
- React Router DOM
- NewsAPI.org
- CSS3 with responsive design

## Environment Variables
- `REACT_APP_API_KEY` - Your NewsAPI.org API key (required)

## Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Security Note
Never commit your `.env` file to version control. It's already included in `.gitignore`.
