import express from 'express';
import IndexRouter from './routes';

const app = express();
const port = 1245;

app.use(IndexRouter);

app.listen(port, () => {
  console.log('Server listening on port', port);
});

export default app;
