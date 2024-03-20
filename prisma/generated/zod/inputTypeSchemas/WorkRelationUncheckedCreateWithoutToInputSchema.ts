import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkRelationUncheckedCreateWithoutToInputSchema: z.ZodType<Prisma.WorkRelationUncheckedCreateWithoutToInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fromId: z.string()
}).strict();

export default WorkRelationUncheckedCreateWithoutToInputSchema;
