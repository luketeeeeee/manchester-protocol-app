import express from 'express';
import { PatientController } from '../controllers/patient';

const router = express.Router();

router.route('/').get(PatientController.findAll);
router.route('/:patientId').get(PatientController.findById);
router.route('/').post(PatientController.create);
router.route('/:patientId').put(PatientController.update);
router.route('/:patientId').delete(PatientController.remove);
router.route('/').delete(PatientController.removeAll);

export default router;
