import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://prahwa.net/api/article-categories', {
      headers: {
        'api-key': 'LwdRu2303uf6ot01YQS6XnS0XT9lGLX2pzNQacLK'
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product categories' });
  }
}
