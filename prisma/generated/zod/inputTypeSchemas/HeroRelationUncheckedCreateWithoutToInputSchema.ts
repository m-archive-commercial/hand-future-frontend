import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HeroRelationUncheckedCreateWithoutToInputSchema: z.ZodType<Prisma.HeroRelationUncheckedCreateWithoutToInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  fromId: z.string()
}).strict();

export default HeroRelationUncheckedCreateWithoutToInputSchema;
