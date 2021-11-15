import express from 'express';
import path from 'path';

const app = express();

const port = 3200;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
