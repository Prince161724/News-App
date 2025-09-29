// Environment configuration for React app
const config = {
  // API Key - Multiple fallback methods
  API_KEY: process.env.REACT_APP_API_KEY || 
           window.FALLBACK_API_KEY || 
           'e4c160232cb24db5b3511429ccd2ec63',
  
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
console.log('- Final API Key:', !!config.API_KEY);
console.log('- API Key preview:', config.API_KEY ? config.API_KEY.substring(0, 8) + '...' : 'MISSING');
console.log('- Base URL:', config.NEWS_API_BASE);

// Test API endpoint
if (config.API_KEY) {
  console.log('🌐 Testing API endpoint...');
  fetch(`${config.NEWS_API_BASE}/top-headlines?country=us&pageSize=1&apiKey=${config.API_KEY}`)
    .then(response => {
      console.log('📡 API Test Response:', response.status, response.ok ? '✅ SUCCESS' : '❌ FAILED');
      if (!response.ok) {
        return response.text().then(text => {
          console.error('❌ API Error Details:', text);
        });
      }
      return response.json();
    })
    .then(data => {
      if (data) {
        console.log('📰 API Test Result:', data.status, `${data.totalResults || 0} articles available`);
      }
    })
    .catch(error => {
      console.error('🚨 API Test Failed:', error.message);
    });
}

export default config;