// Environment configuration for React app
const config = {
  // API Key - React automatically loads REACT_APP_* variables from .env
  API_KEY: process.env.REACT_APP_API_KEY || 'e4c160232cb24db5b3511429ccd2ec63',
  
  // Debug information
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  
  // API endpoints
  NEWS_API_BASE: 'https://newsapi.org/v2'
};

// Debug logging
console.log('🔧 News App Config:');
console.log('- Environment:', process.env.NODE_ENV);
console.log('- API Key loaded:', !!config.API_KEY);
console.log('- API Key preview:', config.API_KEY ? config.API_KEY.substring(0, 8) + '...' : 'MISSING');

export default config;