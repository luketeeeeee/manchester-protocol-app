import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const updatePatient = (patientId: string, patient: Prisma.PatientUpdateInput) => {
  return prisma.patient.update({
    where: { id: patientId },
    data: { ...patient },
  });
};
