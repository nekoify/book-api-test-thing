import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv'
import * as bodyParser from 'body-parser'
import * as mongoose from "mongoose";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express"
import Book from "./models";
dotenv.config()
const app: Express = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Express API with Swagger",
      version: "0.1.0",
      description:
        "Simple book api made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:8087",
      },
    ],
  },
  apis: ["./index.ts"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.post('/addBook', async (req: Request, res: Response) => {
  console.log(req.body)
  try {
  await Book.create(req.body);
  res.send({"message": "success"})
  } catch (err: any) {
    res.send({"message": err._message})
    console.log(err)
  }
});

app.get('/books', async (req: Request, res: Response) => {
  Book.find({}).then((books) => {
    res.send(books);
    });
});

app.listen(8087, () => {
  console.log(`[server]: Server is running at http://localhost:8087`);
});

mongoose.connect(process.env.URL as string).then(() => {
  console.log("[server]: Successfully connected to database!");
}).catch( (err: any) => {
  console.error(err)
})