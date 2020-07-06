import { Document } from "mongoose";

export interface Tweet extends Document {
  author: String;
  content: String;
  likes: Number;
  createdAt: Date;
}
