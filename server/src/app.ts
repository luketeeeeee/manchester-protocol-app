import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import router from './routes';
import log from './utils/logger';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const url = process.env.BASE_URL;
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use(router);

app.listen(port, () => {
  log.info(`servidor iniciado em ${url}`);
});

export default app;
