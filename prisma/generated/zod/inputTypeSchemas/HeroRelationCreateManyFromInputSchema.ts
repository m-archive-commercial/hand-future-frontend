import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HeroRelationCreateManyFromInputSchema: z.ZodType<Prisma.HeroRelationCreateManyFromInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  toId: z.string()
}).strict();

export default HeroRelationCreateManyFromInputSchema;
