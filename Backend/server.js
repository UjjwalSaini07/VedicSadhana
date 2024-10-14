const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // You can change the port if needed

app.use(cors());
app.use(bodyParser.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another service like SendGrid or SMTP
  auth: {
    user: 'saini.ujjwals007@gmail.com', 
    pass: 'pnot bnpc cfwp wnyx',
  },
});

// GET route for /send-email to avoid "Cannot GET" error in the browser
app.get('/send-email', (req, res) => {
    res.send('Email API is running. Use POST /send-email to send an email.');
  });
  
// Email sending endpoint
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

   const mailOptions = {
        from: 'saini.ujjwals007@gmail.com', // Your email
        to: email,
        subject: 'Congratulations! You’ve Successfully Subscribed to Daily Bhagavad Gita Shlokas!',
        text: `You have successfully subscribed to daily Bhagavad Gita Shlokas! Congratulations! 🎉
    
Get ready to dive deep into the profound wisdom and teachings of the Bhagavad Gita. Each day, you will receive a meaningful Shloka delivered straight to your inbox. These sacred verses will guide you on a spiritual journey, offering insights into life, duty, and inner peace.
    
Enjoy the daily dose of timeless philosophy and find inspiration from the divine teachings of Lord Krishna. 🌿
    
We are excited to have you with us on this path of spiritual growth!`
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
