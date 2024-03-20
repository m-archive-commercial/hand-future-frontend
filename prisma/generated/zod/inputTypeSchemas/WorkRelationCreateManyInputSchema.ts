import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkRelationCreateManyInputSchema: z.ZodType<Prisma.WorkRelationCreateManyInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fromId: z.string(),
  toId: z.string()
}).strict();

export default WorkRelationCreateManyInputSchema;
