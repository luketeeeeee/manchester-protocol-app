import { Request, Response } from 'express';
import { createPatient } from '../../../services/patient';

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const newPatient = await createPatient({
      ...body,
    });

    return res.status(201).json({
      message: 'paciente criado com sucesso',
      data: newPatient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'erro interno no servidor',
    });
  }
};
