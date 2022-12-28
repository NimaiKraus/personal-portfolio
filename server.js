const express = require("express");
const cors = require("cors");
const http = require("http");
const nodemailer = require("nodemailer");

const app = express();
const server = http.createServer(app);
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nimai.kraus@gmail.com",
    pass: "ougsitzahughynql",
  },
});

app.post("/contact", (req, res) => {
  console.log(req.body, "req bodyyyy");
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "nimai.kraus@gmail.com",
    subject: "portfolio form submission",
    html: `
        <p>You received a contact from ${name}, with email ${email}, phone: ${phone} and the message is the following :${message}.</p>
    `,
  };
  transport.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
