const express = require("express");
const router = express.Router();
const {
  PostCreate,
  AllPosts,
  UserPosts,
  PostLike,
  PostComment,
  DeleteComment,
} = require("../Controller/PostController");
const verifyToken = require("../Middleware");

router.post("/create", verifyToken, PostCreate);
router.get("/user-posts", verifyToken, UserPosts);
router.get("/all", AllPosts);
router.post("/like/:postId/", verifyToken, PostLike);
router.post("/comment/", verifyToken, PostComment);
router.post("/comment-delete/:commentId", verifyToken, DeleteComment);

module.exports = router;
