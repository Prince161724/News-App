// Environment configuration for React app
const config = {
  // API Key - should NOT be hard-coded. Prefer server-side env or build-time REACT_APP_API_KEY.
  API_KEY: process.env.REACT_APP_API_KEY || window.FALLBACK_API_KEY || '',
  
  // Debug information
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  
  // API endpoints
  NEWS_API_BASE: 'https://newsapi.org/v2'
};

// Enhanced debug logging
console.log('🔧 News App Config Debug:');
console.log('- Environment:', process.env.NODE_ENV);
console.log('- API Key from env:', process.env.REACT_APP_API_KEY ? 'FOUND' : 'NOT FOUND');
console.log('- Final API Key present in client bundle:', !!config.API_KEY ? 'YES (avoid this!)' : 'NO');
console.log('- Base URL:', config.NEWS_API_BASE);

// Do not perform API calls from the client at module-load time.
// Server-side API calls should run in serverless functions or during build.

export default config;