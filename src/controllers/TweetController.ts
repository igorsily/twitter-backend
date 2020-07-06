import { Request, Response } from "express";
import { Tweet } from "@models/Tweet";
import TweetSchema from "../database/schemas/TweetSchema";

export class TweetController {
  async index(request: Request, response: Response) {
    const tweets: Array<Tweet> = await TweetSchema.find({}).sort("-createdAt");
    return response.status(200).json(tweets);
  }

  async store(request: Request, response: Response) {
    const tweet: Tweet = await TweetSchema.create(request.body);

    //@ts-ignore
    request.io.emit("tweet", tweet);

    return response.status(201).json(tweet);
  }
}
