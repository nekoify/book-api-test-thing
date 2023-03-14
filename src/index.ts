import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv'
import * as mongoose from "mongoose";
import Book from "./models";
dotenv.config()
const app: Express = express();

app.get('/', async (req: Request, res: Response) => {
  res.send('yo');
  const doc = await Book.create({ 
    title: "title",
    author: "auth",
    rating: "1.111",
    desc: "yo"
  });
});

app.listen(8087, () => {
  console.log(`[server]: Server is running at http://localhost:8087`);
});

mongoose.connect(process.env.URL as string).then(() => {
  console.log("[server]: Successfully Connected!");
}).catch( (err: any) => {
  console.error(err)
})