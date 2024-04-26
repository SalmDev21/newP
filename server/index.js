require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require('bcrypt'); // https://www.npmjs.com/package/bcrypt npm i bcrypt
var jwt = require('jsonwebtoken'); //https://github.com/auth0/node-jsonwebtoken npm install jsonwebtoken
const nodemailer = require("nodemailer");// mail

const app = express();
const port = 3001

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

  
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jomv'
})


con.connect(function(err) {
    if (err) {
        console.log("Error in Connection");
    } else {
        console.log("Connected");
    }
})

app.get('/hash', (req, res) => {
    bcrypt.hash("123456", 10, (err, hash) => {
        if (err) return res.json({ Error: "Error in hashing password" });
        const values = [
            hash
        ]
        return res.json({ result: hash });
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users Where email = ?";
    con.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "Error in runnig query" });
        if (result.length > 0) {
            bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
                if (err) return res.json({ Error: "password error" });
                if (response) {
                    const token = jwt.sign({ role: "admin" }, "jwt-secret-key", { expiresIn: '1d' });
                    return res.json({ Status: "Success", Token: token })
                } else {
                    return res.json({ Status: "Error", Error: "Wrong Email or Password" });
                }
            })
        } else {
            return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
    })
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (`name`,`email`,`password`, `userType`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if (err) return res.json({ Error: "Error in hashing password" });
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.userType,
        ]
        con.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Error query" });
            return res.json({ Status: "Success" });
        })
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";
  con.query(sql, [email], (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ Status: "Error", Error: "Internal server error" });
      }
      if (result.length === 0) {
          return res.json({ Status: "User not existed" });
      }
      const user = result[0];
      const token = jwt.sign({ id: user.id }, "jwt_secret_key", { expiresIn: "1d" });
      
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'mhamdisalma123@gmail.com',
              pass: 'ydsm hmwi yvup knxa'
          }
      });
    
      var mailOptions = {
          from: 'mhamdisalma123@gmail.com',
          to: user.email, // Utilisation de l'e-mail de l'utilisateur trouvé dans la base de données
          subject: 'Reset Password Link',
          text: `http://localhost:3000/reset_password/${user.id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error);
              return res.status(500).json({ Status: "Error", Error: "Failed to send email" });
          } else {
              return res.send({ Status: "Success" });
          }
      });
  });
});

app.post('/reset-password/:id/:token', (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.json({ Status: "Error hashing password" });
        }

        const sql = "UPDATE users SET password = ? WHERE id = ?";
        con.query(sql, [hash, id], (err, result) => {
          if (err) {
            return res.json({ Status: "Error updating password" });
          }
          return res.json({ Status: "Success" });
        });
      });
    }
  });
});
