import express from "express";
import { TweetController } from "@controllers/TweetController";
import { LikeController } from "@controllers/LikeController";

const routes = express.Router();

const tweetController = new TweetController();
const likeController = new LikeController();

routes.get("/tweets", tweetController.index);
routes.post("/tweets", tweetController.store);

routes.post("/likes/:id", likeController.store);

export default routes;
