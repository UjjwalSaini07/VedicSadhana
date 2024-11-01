const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// GET route for /send-email to avoid "Cannot GET" error in the browser
app.get('/send-email', (req, res) => {
  res.send('Email API is running. Use POST /send-email to send an email.');
});

// Email endpoint -1
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const mailOptions = {
    from: 'saini.ujjwals007@gmail.com',
    to: email,
    subject: 'Congratulations! You’ve Successfully Subscribed to Daily Bhagavad Gita Shlokas!',
    text: `🎉 Hurray! You've officially subscribed to daily Bhagavad Gita Shlokas! 🌟✨
 
 Get ready to dive deep into the profound wisdom and teachings of the Bhagavad Gita. Each day, you will receive a meaningful Shloka delivered straight to your inbox. These sacred verses will guide you on a spiritual journey, offering insights into life, duty, and inner peace.
 
 Enjoy the daily dose of timeless philosophy and find inspiration from the divine teachings of Lord Krishna. 🌿
 
 We are excited to have you with us on this path of spiritual growth!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

// New route to handle Google Apps Script API endpoint -2
app.post('/submit-to-google', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
      const googleApiResponse = await axios.post('https://script.google.com/macros/s/AKfycbxBtwPmMCVNgydtEF3GWwgKQUC0R3Fmzn9k5ecg5OC8Nj5IOll6OKvYACixwhDwVizN/exec', {
        email: email
      }, {
        headers: { 'Content-Type': 'application/json' }  // You can enable headers here if needed
      });  

    if (googleApiResponse.status !== 200) {
      console.error("Google API Error: ", googleApiResponse.data);
      return res.status(500).json({ success: false, message: 'Failed to submit to Google API' });
    }

    res.status(200).json({ success: true, message: googleApiResponse.data.message });
  } catch (error) {
    console.error("Error submitting to Google API:", error);
    res.status(500).json({ success: false, message: 'Google API request failed' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
