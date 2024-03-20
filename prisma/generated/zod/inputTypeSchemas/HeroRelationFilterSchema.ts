import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroRelationFilterSchema: z.ZodType<Prisma.HeroRelationFilter> = z.object({
  is: z.lazy(() => HeroWhereInputSchema).optional(),
  isNot: z.lazy(() => HeroWhereInputSchema).optional()
}).strict();

export default HeroRelationFilterSchema;
