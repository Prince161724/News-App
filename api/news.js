// Vercel Serverless Function: /api/news
// Proxies requests to NewsAPI.org using a server-side API key (set NEWS_API_KEY in Vercel env).
export default async function handler(req, res) {
  try {
    const { category = 'general', page = '1', pageSize = '7', country = 'us' } = req.query || {};

    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ status: 'error', message: 'Server missing NEWS_API_KEY environment variable' });
    }

    const url = `https://newsapi.org/v2/top-headlines?country=${encodeURIComponent(country)}&category=${encodeURIComponent(category)}&pageSize=${encodeURIComponent(pageSize)}&page=${encodeURIComponent(page)}&apiKey=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url);
    const text = await response.text();

    // Forward status and body. Set a small cache to reduce rate usage.
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    res.status(response.status).send(text);
  } catch (err) {
    console.error('API proxy error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
}
