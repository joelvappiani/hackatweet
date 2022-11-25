require("../../models/connection");
const User = require("../../models/User");

export default async (req, res) => {
if (req.method === 'POST'){
    const { token } = req.body
    const foundUser = await User.find({token})
    res.json({result: true, foundUser})
}
}