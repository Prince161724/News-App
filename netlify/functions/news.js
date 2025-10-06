// Netlify Function: netlify/functions/news.js
// This forwards requests to NewsAPI using a server-side API key set in Netlify's environment variables (NEWS_API_KEY).
// It returns the NewsAPI response directly to the client.

exports.handler = async function(event, context) {
  try {
    const params = event.queryStringParameters || {};
    const category = params.category || 'general';
    const page = params.page || '1';
    const pageSize = params.pageSize || '7';
    const country = params.country || 'us';

    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ status: 'error', message: 'Server missing NEWS_API_KEY environment variable' })
      };
    }

    const url = `https://newsapi.org/v2/top-headlines?country=${encodeURIComponent(country)}&category=${encodeURIComponent(category)}&pageSize=${encodeURIComponent(pageSize)}&page=${encodeURIComponent(page)}&apiKey=${encodeURIComponent(apiKey)}`;

    const resp = await fetch(url);
    const text = await resp.text();

    return {
      statusCode: resp.status,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60'
      },
      body: text
    };
  } catch (err) {
    console.error('Netlify function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: 'Internal server error' })
    };
  }
};
