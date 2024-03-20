import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HeroCreatephotosInputSchema: z.ZodType<Prisma.HeroCreatephotosInput> = z.object({
  set: z.string().array()
}).strict();

export default HeroCreatephotosInputSchema;
