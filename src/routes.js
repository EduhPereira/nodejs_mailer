const routes = require("express").Router();
const nodemailer = require("nodemailer");
const smtp_config = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: smtp_config.host,
  port: smtp_config.port,
  secure: false,
  auth: {
    user: smtp_config.user,
    pass: smtp_config.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

routes.get("/mailer/send", async (req, res) => {
  const mailsent = transporter.sendMail({
    text: "email text",
    subject: "email subject",
    from: "name <your_email@mail.com>",
    to: ["person_1@mail.com", "person_2@mail.com"],
  });
});

module.exports = routes;
