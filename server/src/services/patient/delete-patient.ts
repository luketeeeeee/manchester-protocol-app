import prisma from '../../prisma';

export const deletePatient = (patientId: string) => {
  return prisma.patient.delete({ where: { id: patientId } });
};
