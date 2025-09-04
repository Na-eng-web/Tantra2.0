require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
const PORT = process.env.BACKEND_PORT || 5000;
console.log(process.env.VITE_API_URL)
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Nodemailer (use your email + app password)
const transporter = nodemailer.createTransport({
  service: "gmail", // you can also use SMTP
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS // Gmail app password, not your login password
  }
});

// API to handle email submission
app.post("/subscribe", (req, res) => {
  const userEmail = req.body.email;

  if (!userEmail) {
    return res.status(400).send("Email is required");
  }

    // Send mail to YOU when someone subscribes
    const notifyOptions = {
      from: "sonwatkar777@gmail.com",
      to: "sonwatkar777@gmail.com",
      subject: "New Subscriber",
      text: `A new user subscribed with email: ${userEmail}`
    };

    // Send welcome email to subscriber
    const welcomeOptions = {
      from: "sonwatkar777@gmail.com",
      to: userEmail,
      subject: "Welcome to Email Notify!",
      text: "Thank you for subscribing! You will now receive updates from us."
    };

    transporter.sendMail(notifyOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error sending notification email");
      } else {
        console.log("Notification email sent: " + info.response);
        // Send welcome email to subscriber
        transporter.sendMail(welcomeOptions, (err, info2) => {
          if (err) {
            console.log(err);
            return res.status(500).send("Error sending welcome email");
          } else {
            console.log("Welcome email sent: " + info2.response);
            res.send("Subscription successful. Welcome email sent.");
          }
        });
      }
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
