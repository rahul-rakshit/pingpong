import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { add4 } from './add4';
const port = 1357;

const app = express();
app.use(cors());

function findEnv(hostname: string) {
  if (/localhost/.test(hostname)) return 'local';
  if (/test/.test(hostname)) return 'test';
  if (/staging/.test(hostname)) return 'staging';
  return 'production';
}

app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong', env: findEnv(req.hostname) });
});

app.get('/add4', (req: Request, res: Response) => {
  const result = add4(Number(req.query.num));
  res.json({ result });
});

app.listen(port, () => {
  console.log(`🚀 Express server listening on port ${port}.`);
});
