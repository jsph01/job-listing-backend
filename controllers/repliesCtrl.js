const Post = require('../models/Post');
const Reply = require('../models/Reply');
const User = require('../models/User');

function index(req, res) {
  Reply.find({}, (err, allReplies) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    res.json({ replies: allReplies });
  });
}

function show(req, res) {
  Reply.findById(req.params.id, (err, foundReply) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    res.json({ reply: foundReply });
  });
}

//todo -> author shouldnt reply to his own post
  //if replier is author then append message to reply
function create(req, res) {
  Post.findById(req.body.postId, (err, targetPost) => {

    if(req.user.username == targetPost.authorUsername) {
      //author is replying to a reply on his post
      Reply.findById(req.body.replyId, (err, reply) => {
        reply.messages.push({
          authorUsername: req.user.username,
          body: req.body.reply
        });
        reply.save();
        res.json({ reply })
      });
    } else {
      if(targetPost.replies === []) {
        //user is replying to the post for the first time
        let reply = {
          consumerUsername: req.user.username,
          messages: [{
            authorUsername: req.user.username,
            body: req.body.reply
          }]
        };
      
        Reply.create(reply, (err, newReply) => {
          if(err) return res.json(({ err }));
          User.findById(req.user.id, (err, currentUser) => {
            currentUser.replies.push(newReply);
            currentUser.save();
          });
          
          targetPost.replies.push(newReply);
          targetPost.save();
      
          res.json({ reply: newReply });
        });
      } else {
        //user is replying again
        let message = {
          authorUsername: req.user.username,
          body: req.body.reply
        };
        User.findById(req.user.id, async (err, currentUser) => {
          let reply = targetPost.replies.find(reply => currentUser.replies.includes(reply) && reply);
          Reply.findById(reply._id, (err, reply) => {
            reply.messages.push(message);
            reply.save();
            res.json({ reply });
          });
        });
      }
    }


  });
}


module.exports = {
  index,
  show,
  create
};