import { Request, Response } from 'express';
import { findPatientById, updatePatient } from '../../../services/patient';

export const update = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;
    const patientData = req.body;

    const patientToUpdate = await findPatientById(patientId);

    if (!patientToUpdate) {
      return res.status(404).json({
        message: 'paciente não encontrado',
      });
    }

    const updatedPatient = await updatePatient(patientId, patientData);

    return res.status(200).json({
      message: 'paciente atualizado com sucesso',
      data: updatedPatient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
