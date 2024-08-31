// pages/api/lacak.js
import axios from 'axios';

export default async function handler(req, res) {
  const { noResi } = req.query;

  if (!noResi) {
    return res.status(400).json({ error: 'Nomor resi diperlukan' });
  }

  try {
    const response = await axios.get(`https://api.hibxpress.com/api/regular/log?noResi=${noResi}`);
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
  }
}
