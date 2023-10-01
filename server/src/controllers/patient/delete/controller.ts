import { Request, Response } from 'express';
import { deletePatient, findPatientById } from '../../../services/patient';

export const remove = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;

    const patientToDelete = await findPatientById(patientId);

    if (!patientToDelete) {
      return res.status(404).json({
        message: 'paciente não encontrado',
      });
    }

    await deletePatient(patientId);

    return res.status(204).json({
      message: 'paciente deletado com sucesso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
