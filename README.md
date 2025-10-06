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

## Deploying to Netlify

You can deploy this project to Netlify in two main ways: via the Netlify Web UI (recommended) or using the Netlify CLI.

Quick checklist before deploying:
- Push the repository to GitHub (or Git provider of your choice).
- In Netlify site settings, add an environment variable `NEWS_API_KEY` with your NewsAPI key (server-side).
- Ensure the `netlify.toml` in the repo root is present (it is) so Netlify knows the functions folder and build command.

Netlify Web UI steps:
1. Go to https://app.netlify.com and click "New site from Git".
2. Connect your Git provider and select this repository.
3. Set build command: `npm ci && npm run build` and publish directory: `build`.
4. Set functions directory to `netlify/functions` (Netlify may auto-detect this).
5. Add site environment variable `NEWS_API_KEY` under Site settings → Build & deploy → Environment.
6. Deploy and watch the logs. The `news` function will be available under Functions in the Netlify dashboard.

Netlify CLI steps (PowerShell):
```powershell
# Install CLI (one-time)
npm install -g netlify-cli

# Login interactively (opens browser)
netlify login

# From repo root: link or init the site
netlify init

# Set environment variable in Netlify
netlify env:set NEWS_API_KEY "your_newsapi_key_here"

# Build and deploy
npm ci
npm run build
netlify deploy --prod --dir=build
```

Local testing with functions:
- Use `netlify dev` to run the app and serverless functions locally (it respects `netlify.toml` and `_redirects`).

If you'd like, I can add a GitHub Actions workflow that runs `npm ci && npm run build` on push and reports build status. Just say the word.
