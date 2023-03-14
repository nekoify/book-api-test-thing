import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('yo');
});

app.listen(8087, () => {
  console.log(`[server]: Server is running at http://localhost:8087`);
});