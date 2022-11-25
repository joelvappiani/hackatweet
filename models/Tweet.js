const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  message: String,
  nbLikes: Number,
  date: Date,
  userLikes: String,
});

const Tweet = mongoose.models.tweets || mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
