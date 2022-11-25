const User = require("../../models/User");
require("../../models/connection");
const { checkBody } = require("../../modules/checkbody");
const bcrypt = require("bcrypt");


export default function signup(req, res) {
  if (req.method === "POST") {
    if (!checkBody(req.body, ["username", "password"])) {
      res.json({ result: false, error: "Missing or empty fields" });
      return;
    }

    User.findOne({ username: req.body.username }).then((data) => {
      if (data && bcrypt.compareSync(req.body.password, data.password)) {
        res.json({ result: true, token: data.token });
      } else {
        res.json({ result: false, error: "User not found or wrong password" });
      }
    });

    // Process a POST request
  } else {
    res.status(500).json({ error: "not allowed" }); // Handle any other HTTP method
  }
}
