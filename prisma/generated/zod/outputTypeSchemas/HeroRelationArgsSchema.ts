import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationSelectSchema } from '../inputTypeSchemas/HeroRelationSelectSchema';
import { HeroRelationIncludeSchema } from '../inputTypeSchemas/HeroRelationIncludeSchema';

export const HeroRelationArgsSchema: z.ZodType<Prisma.HeroRelationDefaultArgs> = z.object({
  select: z.lazy(() => HeroRelationSelectSchema).optional(),
  include: z.lazy(() => HeroRelationIncludeSchema).optional(),
}).strict();

export default HeroRelationArgsSchema;
