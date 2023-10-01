import { Request, Response } from 'express';
import { deleteAllPatients } from '../../../services/patient';

export const removeAll = async (_req: Request, res: Response) => {
  try {
    await deleteAllPatients();

    return res.status(200).json({
      message: 'todos os pacientes deletados',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
