import * as express from 'express';
const router = express.Router();

/* Routes */
import { SwishRoutes } from './swish';

export function APIRoutes(server: express.Express) {
  router.use('/swish', SwishRoutes);

  router.use('*', (_, res) => {
    res.status(405).end();
  });

  server.use('/api', router);
}
