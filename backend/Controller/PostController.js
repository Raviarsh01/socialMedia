const Posts = require("../Models/PostModel");
const Users = require("../Models/UsersModel");

const PostCreate = async (req, res) => {
  const { caption, imageLink } = req.body;
  const userId = req.user.userId;
  const userData = await Users.findById(userId);
  try {
    if (caption && imageLink) {
      const newPost = new Posts({
        userId,
        caption,
        imageLink,
      });
      const savedPost = await newPost.save();
      res.status(201).json({ message: "Post saved successfully" });
    } else {
      res.status(400).json({ message: "Field required" });
    }
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const AllPosts = async (req, res) => {
  try {
    // const posts = await Posts.find().populate("userId").exec();
    const posts = await Posts.find()
      .populate({
        path: "userId",
        select: "firstName lastName",
      })
      .populate({
        path: "likes",
        select: "firstName lastName",
      })
      .populate({
        path: "comments.user",
        select: "firstName lastName",
      })
      .exec();
    const reversedPosts = posts.reverse();
    res.status(200).json(reversedPosts);
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserPosts = async (req, res) => {
  const userId = req.user.userId;
  try {
    const posts = await Posts.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const PostLike = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.user;
  try {
    const post = await Posts.findById(postId);

    if (post.likes.includes(userId)) {
      post.likes.pull(userId);
      await post.save();
      return res.status(200).json({ message: "Disliked Success" });
    }
    post.likes.push(userId);
    const updatedPost = await post.save();

    res.status(200).json({ message: "Liked Success" });
  } catch (error) {
    console.error("Like post error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const PostComment = async (req, res) => {
  const { userId } = req.user;
  const { postid, text } = req.body;
  try {
    const post = await Posts.findById(postid);
    post.comments.push({
      user: userId,
      text,
    });
    const updatedPost = await post.save();

    res.status(200).json("Comment added");
  } catch (error) {
    console.error("Comment on post error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const DeleteComment = async (req, res) => {
  const { commentId } = req.params;
  const { userId } = req.user;
  const { postid, text } = req.body;
  try {
    const post = await Posts.findById(postid);
    post.comments.pull(commentId);
    await post.save();
    return res.status(200).json({ message: "Comment remove" });
  } catch (error) {
    console.error("Comment on post error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  PostCreate,
  AllPosts,
  UserPosts,
  PostLike,
  PostComment,
  DeleteComment,
};
