# News App Deployment Guide for Render

## Prerequisites
1. Get your API key from [NewsAPI.org](https://newsapi.org/)
2. Create a GitHub repository (if not already done)
3. Have a Render account

## Steps to Deploy on Render

### 1. Environment Setup
- Copy `.env.example` to `.env` and add your NewsAPI key:
  ```
  REACT_APP_API_KEY=your_actual_api_key_here
  ```

### 2. GitHub Setup
1. Initialize git repository (if not done):
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push to GitHub:
   ```
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### 3. Render Deployment
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Use these settings:
   - **Name**: news-app (or your preferred name)
   - **Environment**: Node
   - **Region**: Choose your preferred region
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npx serve -s build -l $PORT`

5. Add Environment Variable:
   - **Key**: `REACT_APP_API_KEY`
   - **Value**: Your NewsAPI key

6. Click "Create Web Service"

### 4. Alternative: Auto-Deploy with render.yaml
The project includes a `render.yaml` file for automatic deployment configuration. Just ensure you set the `REACT_APP_API_KEY` environment variable in your Render dashboard.

## Local Development
1. Install dependencies: `npm install`
2. Create `.env` file with your API key
3. Start development server: `npm start`

## Production Build Testing
To test the production build locally:
```
npm run build
npx serve -s build
```

## Notes
- The app fetches news from NewsAPI.org
- Environment variables are required for the API to work
- The build creates a static React app that can be served from any web server