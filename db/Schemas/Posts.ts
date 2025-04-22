import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
  posts: [],
});

const Posts = mongoose.models.Posts || mongoose.model('Posts', PostsSchema);

export default Posts;
