import mongoose, { Schema } from "mongoose";
import { Tweet } from "@models/Tweet";

const TweetSchema: Schema = new Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Tweet>("Tweet", TweetSchema);
