import prisma from '../../prisma';

export const findPatientById = (patientId: string) => {
  return prisma.patient.findUnique({
    where: { id: patientId },
  });
};
