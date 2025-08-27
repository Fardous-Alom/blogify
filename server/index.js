import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  console.log(req.body); // Add this line
  const { email, password } = req.body;
  res.send("Registration form submitted: " + email);
});

app.listen(5000);