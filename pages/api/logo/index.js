// File: pages/api/logo.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://prahwa.net/api/logo', {
      headers: {
        'api-key': 'LwdRu2303uf6ot01YQS6XnS0XT9lGLX2pzNQacLK' // Ganti dengan API key Anda
      }
    });
    const logo = response.data;
    res.status(200).json(logo);
  } catch (error) {
    console.error('Error fetching logo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
 