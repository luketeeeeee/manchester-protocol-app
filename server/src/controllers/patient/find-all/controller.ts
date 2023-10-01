import { Request, Response } from 'express';
import { findAllPatients } from '../../../services/patient';

export const findAll = async (_req: Request, res: Response) => {
  try {
    const patients = await findAllPatients();

    return res.status(200).json({
      data: patients,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
