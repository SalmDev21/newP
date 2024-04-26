const express = require('express');
const categorieRoute = require("./routes/categorieRoute");
const ventesRoute = require("./routes/ventesRoute");
const achatRoute = require("./routes/achatRoute");
const abattageRoute = require("./routes/raportAbattageRoute");
const expeditionRoute = require ("./routes/expeditionRoute")
const tempRoute = require ("./routes/tempRout")
const controleRoute = require ("./routes/controleRoute")
const retourRoute = require ("./routes/retourRoute")
const camionRoute = require ("./routes/camionRoute")
const NompropreRoute = require ("./routes/nonpropreRoute")

const DecoupeRoute = require ("./routes/decoupeRoute")
const dindeRoute = require ("./routes/dindeRoute")

const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");// mail


const app = express();
app.use(express.json());
app.use(require("cors")());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send("Bienvenue.");
});

app.use("/ventes", ventesRoute);
app.use("/categorie", categorieRoute); 
app.use("/achat", achatRoute);
app.use("/abattage", abattageRoute);
app.use("/expedition",expeditionRoute)
app.use("/temp",tempRoute)
app.use("/controle",controleRoute)
app.use("/retour",retourRoute)
app.use("/decoupe", DecoupeRoute)
app.use("/camion",camionRoute)
app.use("/dinde",dindeRoute)

app.use("/nonpropre",NompropreRoute)


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
   console.log(`Écoute sur le port ${PORT}`);
});

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mhamdisalma123@gmail.com",
        pass: "ydsm hmwi yvup knxa",
      },
    });

    const mailOptions = {
      from: "mhamdisalma123@gmail.com",
      to: email,
      subject: subject,
      html: `<p>${message}</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `Une erreur s'est produite lors de l'envoi de l'e-mail` });
      }
      return resolve({ message: "E-mail envoyé avec succès" });
    }); 
  });
}

app.post("/mail/send-email", (req, res) => {
    const { email, subject, message } = req.body;
    sendEmail({ email, subject, message })
      .then(() => res.status(200).send('Email sent successfully'))
      .catch((error) => {
        console.error("Failed to send email:", error);
        res.status(500).send('Failed to send email');
      });
  });