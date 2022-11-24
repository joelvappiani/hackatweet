const User = require("../../models/User");
require("../../models/connection");
const { checkBody } = require("../../modules/checkbody");

const bcrypt = require("bcrypt");

const uid2 = require("uid2");

export default function signup(req, res) {
  if (req.method === "POST") {
    if (!checkBody(req.body, ["username", "password"])) {
      res.json({ result: false, error: "Missing or empty fields" });
      return;
    }

    // Check if the user has not already been registered
    User.findOne({ username: req.body.username }).then((data) => {
      if (data === null) {
        const hash = bcrypt.hashSync(req.body.password, 10);

        const newUser = new User({
          token: uid2(32),
          username: req.body.username,
          firsName: req.body.firstName,
          password: hash,
        });

        newUser.save().then((newDoc) => {
          res.json({ result: true, token: newDoc.token });
        });
      } else {
        // User already exists in database
        res.json({ result: false, error: "User already exists" });
      }
    });

    // Process a POST request
  } else {
    res.status(500).json({ error: "not allowed" }); // Handle any other HTTP method
  }
}
