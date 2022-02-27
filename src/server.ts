import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) =>
  response.status(201).json({ message: "Hello World!" })
);

app.listen(3333, () => console.log("Server is running!"));
