require("../../models/connection");
const Tweet = require("../../models/Tweet");
const User = require("../../models/User");
export default async (req, res) => {
  if (req.method === "POST") {
    const { token, message, nbLikes } = req.body;
    const date = new Date();
    const findUser = await User.findOne({token})
    const user = findUser._id
    const newTweet = await new Tweet({ user, message, nbLikes, date });
    newTweet.save();
    res.json({ result: true });
  }
  if (req.method === "GET") {
    const allTweets = await Tweet.find().populate({
      path: "user",
      select: "username",
    });

    res.json({
      result: true,
      tweets: allTweets,
    });
  }
  if (req.method === "DELETE") {
    res.json({ method: "delete" });
  }
};
// .populate({
//   path: 'copies.loaned_to',
//   select:
//     'username',
// })
