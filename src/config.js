// Load environment variables
require('dotenv').config();

// Environment configuration
const config = {
  // API Key with multiple fallback methods
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
console.log('- All env vars:', Object.keys(process.env).filter(key => key.startsWith('REACT_APP_')));

export default config;