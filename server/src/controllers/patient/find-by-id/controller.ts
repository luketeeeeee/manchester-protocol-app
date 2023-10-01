import { Request, Response } from 'express';
import { findPatientById } from '../../../services/patient';

export const findById = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;

    const patient = await findPatientById(patientId);

    if (!patient) {
      return res.status(404).json({
        message: 'paciente não encontrado',
      });
    }

    return res.status(200).json({
      data: patient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
