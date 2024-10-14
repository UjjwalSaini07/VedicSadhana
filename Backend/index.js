const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; // Keep port 3001 for the API server
const emailPort = 5000; // Keep port 5000 for email sending

app.use(cors());
app.use(bodyParser.json());

// Serving static files from the 'public' directory
app.use(express.static("public"));

// Set CORS headers for specific routes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

// API route to serve specific shlok JSON files
app.get("/api/chapter/:chapter/shlok/:shlok", (req, res) => {
  const file = path.join(
    __dirname,
    "../Data/bhagavad-gita-data/slok",
    `bhagavadgita_chapter_${req.params.chapter}_slok_${req.params.shlok}.json`
  );
  res.status(200).sendFile(file);
});

// API route to serve chapter JSON files
app.get("/api/chapter/:chapter", (req, res) => {
  const file = path.join(
    __dirname,
    "../Data/bhagavad-gita-data/chapter/",
    `bhagavadgita_chapter_${req.params.chapter}.json`
  );
  res.status(200).sendFile(file);
});

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use another service like SendGrid or SMTP
  auth: {
    user: "saini.ujjwals007@gmail.com",
    pass: "pnot bnpc cfwp wnyx", // Keep this password secure
  },
});

// GET route for /send-email to avoid "Cannot GET" error in the browser
app.get("/send-email", (req, res) => {
  res.send("Email API is running. Use POST /send-email to send an email.");
});

// Email sending endpoint
app.post("/send-email", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  const mailOptions = {
    from: "saini.ujjwals007@gmail.com", // Your email
    to: email,
    subject:
      "Congratulations! You’ve Successfully Subscribed to Daily Bhagavad Gita Shlokas!",
    text: `You have successfully subscribed to daily Bhagavad Gita Shlokas! Congratulations! 🎉
    
Get ready to dive deep into the profound wisdom and teachings of the Bhagavad Gita. Each day, you will receive a meaningful Shloka delivered straight to your inbox. These sacred verses will guide you on a spiritual journey, offering insights into life, duty, and inner peace.
    
Enjoy the daily dose of timeless philosophy and find inspiration from the divine teachings of Lord Krishna. 🌿
    
We are excited to have you with us on this path of spiritual growth!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
    console.log("Email sent:", info.response);
    // Sending back the correct success message as JSON
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  });
});

// Start the server for the API and email
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.listen(emailPort, () => {
  console.log(`Email server is running on http://localhost:${emailPort}`);
});



// !This is a Previous Code for index reading
// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3001;

// app.use(express.static('public'));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
//   });

// app.listen(port, () => {
//     console.log(`app listening at http://localhost:${port}`);
// });

// app.get('/api/chapter/:chapter/shlok/:shlok', (req, res) => {
//     const file = path.join(__dirname, '../Data/bhagavad-gita-data/slok', `bhagavadgita_chapter_${req.params.chapter}_slok_${req.params.shlok}.json`);
//     res.status(200).sendFile(file);
// });

// app.get('/api/chapter/:chapter', (req, res) => {
//     const file = path.join(__dirname, '../Data/bhagavad-gita-data/chapter/', `bhagavadgita_chapter_${req.params.chapter}.json`);
//     res.status(200).sendFile(file);
// });
