import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroCountOutputTypeSelectSchema } from './HeroCountOutputTypeSelectSchema';

export const HeroCountOutputTypeArgsSchema: z.ZodType<Prisma.HeroCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HeroCountOutputTypeSelectSchema).nullish(),
}).strict();

export default HeroCountOutputTypeSelectSchema;
