import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkRelationUncheckedCreateWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationUncheckedCreateWithoutFromInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  toId: z.string()
}).strict();

export default WorkRelationUncheckedCreateWithoutFromInputSchema;
