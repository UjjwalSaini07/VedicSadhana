const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use another service like SendGrid or SMTP
        auth: {
          user: 'saini.ujjwals007@gmail.com', 
          pass: 'pnot bnpc cfwp wnyx',
        },
      });      

      const mailOptions = {
        from: 'saini.ujjwals007@gmail.com', // Your email
        to: email,
        subject: 'Congratulations! You’ve Successfully Subscribed to Daily Bhagavad Gita Shlokas!',
        text: `You have successfully subscribed to daily Bhagavad Gita Shlokas! Congratulations! 🎉
    
Get ready to dive deep into the profound wisdom and teachings of the Bhagavad Gita. Each day, you will receive a meaningful Shloka delivered straight to your inbox. These sacred verses will guide you on a spiritual journey, offering insights into life, duty, and inner peace.
    
Enjoy the daily dose of timeless philosophy and find inspiration from the divine teachings of Lord Krishna. 🌿
    
We are excited to have you with us on this path of spiritual growth!`
  };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email', error });
    }
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
