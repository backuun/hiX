// pages/api/postForm.js
import axios from 'axios';
import querystring from 'querystring';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, phone_number, email, inquiries } = req.body;

      // Prepare the form-data body
      const formData = querystring.stringify({
        name,
        phone_number,
        email,
        inquiries
      });

      // Make a request to the external API
      const response = await axios.post(
        'https://prahwa.net/api/contacts',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'api-key': 'LwdRu2303uf6ot01YQS6XnS0XT9lGLX2pzNQacLK'
          }
        }
      );

      // Send the response back to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error posting form data:', error);
      res.status(500).json({ message: 'Failed to submit form' });
    }
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
