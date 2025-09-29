// Fallback API key for production builds
window.FALLBACK_API_KEY = 'e4c160232cb24db5b3511429ccd2ec63';

// Debug information
console.log('🔧 Fallback API Key Loaded');
console.log('- Current domain:', window.location.hostname);
console.log('- Fallback key available:', !!window.FALLBACK_API_KEY);