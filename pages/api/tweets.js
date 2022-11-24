require("../../models/connection");
const Tweet = require('../../models/Tweet')

export default async (req, res) => {
    if (req.method === 'POST') {
      try {
        const {user, message, nbLikes} = req.body
        const date = new Date()
        const newTweet = await new Tweet({user, message, nbLikes, date})
        newTweet.save()
        console.log(newTweet)
        res.json({result: true})
      } catch (err) {

      }
      
    } 
    if (req.method === 'GET') {
      try{
        const allTweets = await Tweet.find().populate({ path: 'user', select: 'username' })
      res.json({
        result: true,
        tweets: allTweets
      })
      } catch (err){
        console.error(err)
      }
      
    }
    if (req.method === 'DELETE') {
      try {
        const {id} = req.body
      await Tweet.findByIdAndDelete(id)
      res.json({method: 'delete', result: true})
      }
      catch(err) {
        console.error(err)
      }
    }
  }
