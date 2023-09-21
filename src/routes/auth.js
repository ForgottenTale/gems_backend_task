const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/login', async (req, res) => {
  try {

    if (req.body.username === undefined) {
      res.status(400).send({ error: "Invalid Data" });
    } else {
      const username = req.body.username;
      const user = { username };
      if (username === "Jack") {
        const token = jwt.sign(user, process.env.SECRET);
        res.json({ token });
      } else {
        res.status(400).send({ error: "Account not found" });
      }
    }
  } catch (err) {
    // logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;