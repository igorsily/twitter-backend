import { Request, Response } from "express";
import { Tweet } from "@models/Tweet";
import TweetSchema from "../database/schemas/TweetSchema";

export class LikeController {
  async store(request: Request, response: Response) {
    const { id } = request.params;

    const tweet: Tweet = await TweetSchema.findById(id);

    tweet.set({ likes: +tweet.likes + 1 });

    await tweet.save();

    //@ts-ignore
    request.io.emit("tweet", tweet);

    return response.status(200).json(tweet);
  }
}
