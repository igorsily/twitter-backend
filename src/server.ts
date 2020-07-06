import express, { request, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";
import { createServer, Server } from "http";
import socketIo from "socket.io";
const app = express();

const server: Server = createServer(app);
const io: socketIo.Server = socketIo(server);

mongoose.connect(
  "mongodb+srv://admin:admin@twitter.un29r.mongodb.net/twitter?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use((request: Request, response: Response, next) => {
  //@ts-ignore
  request.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((request: Request, response: Response, next) => {});

server.listen(3333, () => console.log("Server UP"));
