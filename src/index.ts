import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv'
import * as bodyParser from 'body-parser'
import * as mongoose from "mongoose";
import Book from "./models";
dotenv.config()
const app: Express = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/', async (req: Request, res: Response) => {
  res.send("swagger")
});

app.post('/addBook', async (req: Request, res: Response) => {
  console.log(req.body)
  try {
  await Book.create(req.body);
  res.send({"message": "success"})
  } catch (err) {
    res.send({"message": err})
  }
});

app.listen(8087, () => {
  console.log(`[server]: Server is running at http://localhost:8087`);
});

mongoose.connect(process.env.URL as string).then(() => {
  console.log("[server]: Successfully Connected!");
}).catch( (err: any) => {
  console.error(err)
})