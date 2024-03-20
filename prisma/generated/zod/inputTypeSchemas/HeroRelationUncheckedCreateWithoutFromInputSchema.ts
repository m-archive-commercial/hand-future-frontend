import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HeroRelationUncheckedCreateWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationUncheckedCreateWithoutFromInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  toId: z.string()
}).strict();

export default HeroRelationUncheckedCreateWithoutFromInputSchema;
