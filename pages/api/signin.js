const User = require("../../models/User");
require("../../models/connection");

export default async function signin(req, res) {
  const user = await User.find();

  if (req.method === "POST") {
    res.json({ result: true });
    /*const newUser = new User({
      token: req.body.token,
      firstName: req.body.firstName,
      username: req.body.username,
      password: req.body.password,
    });

    newUser.save().then((newDoc) => {
      res.json({ result: true, token: newDoc.token });
    });*/ // Process a POST request
  } else {
    res.status(500).json({ error: "not allowed" }); // Handle any other HTTP method
  }
}
