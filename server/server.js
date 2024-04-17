require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Server is Runing"));

const contactEmail = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "davidlam_1991@hotmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: fullName,
    to: "david_lam_@hotmail.com",
    subject: "From Portfolio",
    html: `<p>Name: ${fullName}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ code: 500, status: "Error sending message" });
    } console.log("Message Sent");
    res.status(200).json({ code: 200, status: "Message Sent" });
  });
});
