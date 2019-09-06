const Post = require('../models/Post');
const User = require('../models/User');

function populatePost(reqUser, post, cb) {
  if(reqUser){
    if(reqUser.username === post.authorUsername) { //post author, view all replies
      Post.populate(post, { path: 'replies' }).then(post => cb(post));
    } else {
      User.findById(reqUser.id, (err, currentUser) => {
        let reply = post.replies.find(reply => currentUser.replies.includes(reply) && reply);
        
        if(!!reply) Post.populate(post, {
          path: 'replies',
          match: { _id: reply._id }
        }).then(post => cb(post));
        else cb(post);
      });
    }
  } else cb(post);
}

function index(req, res) {
  Post.find({}, (err, allPosts) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    res.json({ posts: allPosts });
  });
}

function show(req, res) {
  Post.findById(req.params.id, (err, foundPost) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    populatePost(req.user, foundPost, (populatedPost) => res.json({ post: populatedPost }));
    //res.json({ post: foundPost });
  });
}

function create(req, res) {
  req.body.post.authorUsername = req.user.username
  Post.create(req.body.post, (err, newPost) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    User.findById(req.user.id, (err, currentUser) => {
      currentUser.posts.push(newPost);
      currentUser.save();
    });

    res.json({ post: newPost });
  });
}

function update(req, res) {
  Post.findByIdAndUpdate(req.params.id, { new: true}, (err, updatedPost) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    res.json({ post: updatePost });
  });
}

function remove(req, res) {
  Post.findByIdAndRemove(req.params.id, (err, removedPost) => {
    if(err) return res.json({
      message: 'mongoose ran into an error',
      error: err
    });

    res.json({ post: removedPost });
  });
}

module.exports = {
  index,
  show,
  create,
  update,
  remove
};
