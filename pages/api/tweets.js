require("../../models/connection");
const Tweet = require("../../models/Tweet");
const User = require("../../models/User");
export default async (req, res) => {
  if (req.method === "POST") {
    const { token, message, nbLikes } = req.body;
    const date = new Date();
    const findUser = await User.findOne({ token });
    const user = findUser._id;
    const newTweet = await new Tweet({
      user,
      message,
      nbLikes,
      date,
      userLikes: "",
    });
    newTweet.save();
    res.json({ result: true });
  }
  if (req.method === "GET") {
    const allTweets = await Tweet.find().populate({
      path: "user",
      select: { username: 1, token: 1, firstName: 1 },
    });

    res.json({
      result: true,
      tweets: allTweets,
    });
  }
  if (req.method === "DELETE") {
    const { id } = req.body;
    await Tweet.findByIdAndDelete(id);
    const found = await Tweet.findById(id);
    if (found) {
      res.json({ result: false });
    }
    if (!found) {
      res.json({ result: true });
    }
  }

  if (req.method === "PUT") {
    const id = req.body.id;
    const userId = req.body.userId;
    const counter = req.body.counter;

    const tweetId = await Tweet.findById(id);
    const likes = tweetId.nbLikes;
    const usersLikes = tweetId.userLikes;

    if (counter === "increment") {
      await Tweet.findByIdAndUpdate(id, {
        nbLikes: likes + 1,
        userLikes: [...usersLikes, userId],
      });
      const found = await Tweet.findById(id);
      if (found) {
        res.json({ result: true, data: found });
      } else res.json({ result: false });
    }

    if (counter === "decrement") {
      if (likes > 0) {
        await Tweet.findByIdAndUpdate(id, {
          nbLikes: likes - 1,
          userLikes: usersLikes.filter((e) => e !== userId),
        });
        const found = await Tweet.findById(id);
        if (found) {
          res.json({ result: true, data: found });
        }
      } else res.json({ result: false });
    }
  }
};
