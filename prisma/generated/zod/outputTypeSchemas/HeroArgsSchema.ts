import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroSelectSchema } from '../inputTypeSchemas/HeroSelectSchema';
import { HeroIncludeSchema } from '../inputTypeSchemas/HeroIncludeSchema';

export const HeroArgsSchema: z.ZodType<Prisma.HeroDefaultArgs> = z.object({
  select: z.lazy(() => HeroSelectSchema).optional(),
  include: z.lazy(() => HeroIncludeSchema).optional(),
}).strict();

export default HeroArgsSchema;
