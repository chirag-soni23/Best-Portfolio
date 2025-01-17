const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require("path");
const PORT = 5000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email",async(req,res)=>{
    const {name,email,subject,message} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Message: ${subject}`,
        text: `From: ${name} \nEmail: ${email} \nMessage: ${message}`,
      };
    
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
      }
})

const dirname = path.resolve();
app.use(express.static(path.join(dirname,"/Frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(dirname,"Frontend","dist","index.html"))
})

app.get('/',(req,res)=>{
  res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})