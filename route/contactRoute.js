const router = require("express").Router();
const nodemailer = require("nodemailer");

// Contact form endpoint
router.post("/contact", (req, res) => {
  const data = req.body;

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    return res.status(400).json({ msg: "Please fill all the fields!" });
  }

  // Setup transporter with Gmail + App Password
  const smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // from .env
      pass: process.env.EMAIL_PASS, // from .env (App Password, NOT your Gmail login password)
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // your Gmail
    to: process.env.EMAIL_USER, // also your Gmail (you receive it)
    replyTo: data.email, // so you can hit "Reply" to contact form sender
    subject: `Message from ${data.name}`,
    html: `
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };

  // Send email
  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending mail:", error);
      return res
        .status(500)
        .json({ msg: "Failed to send message. Please try again later." });
    }
    res.status(200).json({ msg: "Thank you for contacting Nilesh Kumar!" });
  });
});

module.exports = router;
