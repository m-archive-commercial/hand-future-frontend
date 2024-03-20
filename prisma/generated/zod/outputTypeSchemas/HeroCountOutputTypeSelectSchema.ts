import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const HeroCountOutputTypeSelectSchema: z.ZodType<Prisma.HeroCountOutputTypeSelect> = z.object({
  fromHeroes: z.boolean().optional(),
  toHeroes: z.boolean().optional(),
  works: z.boolean().optional(),
}).strict();

export default HeroCountOutputTypeSelectSchema;
