import { z } from 'zod';

export const createPatientSchema = z.object({
  name: z.string().min(1, 'Insira um nome'),
  cpf: z.optional(z.string().max(11)),
  currentResult: z.optional(z.string()),
});

export type CreatePatientSchemaType = z.infer<typeof createPatientSchema>;

export const updatePatientSchema = z.object({
  currentResult: z.optional(z.string()),
  sum: z.optional(z.number()),
});

export type UpdatePatientSchemaType = z.infer<typeof updatePatientSchema>;
