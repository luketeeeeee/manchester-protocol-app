import prisma from '../../prisma';

export const deleteAllPatients = () => {
  return prisma.patient.deleteMany({});
};
