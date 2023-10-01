import prisma from '../../prisma';

export const findAllPatients = () => {
  return prisma.patient.findMany({});
};
