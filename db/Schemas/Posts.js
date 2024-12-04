const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  posts: [],
});

const Posts =
  mongoose.models.Posts || mongoose.model("Posts", PostsSchema);

module.exports = {
  Posts: Posts,
};
