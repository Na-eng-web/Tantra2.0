require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
const PORT = process.env.BACKEND_PORT || 5000;
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

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

// Define a schema for subscriptions
const subscriptionSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

// Updated /subscribe endpoint to store data in MongoDB
app.post("/subscribe", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  try {
    // Save subscription data to MongoDB
    const newSubscription = new Subscription({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newSubscription.save();
    console.log("Subscription data saved to MongoDB");

    // Send mail to YOU with all user details
    const notifyOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Subscriber Details",
      text: `New subscription details:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send acknowledgment email to the user
    const welcomeOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for subscribing!",
      text: `Dear ${firstName},\n\nThank you for subscribing.\n\nWe confirm that your information has been received. Our team will review your submission and contact you if further details are required.\n\nShould you have any queries, please feel free to reach out to us.\n\nSincerely,  \nThe Team`,
    };

    transporter.sendMail(notifyOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error sending notification email");
      } else {
        console.log("Notification email sent: " + info.response);
        transporter.sendMail(welcomeOptions, (err, info2) => {
          if (err) {
            console.log(err);
            return res.status(500).send("Error sending acknowledgment email");
          } else {
            console.log("Acknowledgment email sent: " + info2.response);
            res.send("Subscription successful. Emails sent and data saved.");
          }
        });
      }
    });
  } catch (err) {
    console.error("Error saving subscription data:", err);
    res.status(500).send("Error saving subscription data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
