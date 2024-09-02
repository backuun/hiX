// File: pages/api/banner.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://prahwa.net/api/banners', {
      headers: {
        'api_key': 'LwdRu2303uf6ot01YQS6XnS0XT9lGLX2pzNQacLK' // Ganti dengan API key Anda
      }
    });
    const banners = response.data;
    res.status(200).json(banners);
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
 