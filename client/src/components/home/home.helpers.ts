import { z } from 'zod';

export const createPatientSchema = z.object({
  name: z.string().min(1, 'Insira um nome'),
  cpf: z.optional(z.string().max(11)),
});

export type CreatePatientSchemaType = z.infer<typeof createPatientSchema>;
