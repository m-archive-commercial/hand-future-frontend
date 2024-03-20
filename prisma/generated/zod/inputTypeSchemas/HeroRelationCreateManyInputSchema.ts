import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HeroRelationCreateManyInputSchema: z.ZodType<Prisma.HeroRelationCreateManyInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fromId: z.string(),
  toId: z.string()
}).strict();

export default HeroRelationCreateManyInputSchema;
