import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const createPatient = (patient: Prisma.PatientCreateInput) => {
  return prisma.patient.create({ data: patient });
};
