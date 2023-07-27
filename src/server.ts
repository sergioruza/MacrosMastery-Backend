import express from 'express';
import { logger } from './config';

const server = express();

server.get('/', (req, res) => res.send('hello'));

server.listen(3333, () => {
  logger.info('Server started on port 3333');
});
