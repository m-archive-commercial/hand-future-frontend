import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroNullableRelationFilterSchema: z.ZodType<Prisma.HeroNullableRelationFilter> = z.object({
  is: z.lazy(() => HeroWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => HeroWhereInputSchema).optional().nullable()
}).strict();

export default HeroNullableRelationFilterSchema;
