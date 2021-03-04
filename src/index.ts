import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { add4 } from './add4';
const port = 1357;

const app = express();
app.use(cors());

app.get('/ping', (_: any, res: Response) => {
  res.json({ message: 'pong' });
});

app.get('/add4', (req: Request, res: Response) => {
  const result = add4(Number(req.query.num));
  res.json({ result });
});

app.listen(port, () => {
  console.log(`🚀 Express server listening on port ${port}.`);
});
