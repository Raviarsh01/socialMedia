const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  caption: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
      text: String,
      dateCommented: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Posts", postSchema);
