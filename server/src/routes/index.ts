import express, { Response } from 'express';
import patientRoutes from './patient.routes';

const router = express.Router();

router.get('/api/v1', async (_, res: Response) => {
  res.send('API - OK');
});

router.use('/api/v1/patients', patientRoutes);

export default router;
