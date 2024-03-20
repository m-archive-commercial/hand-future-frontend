import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereInputSchema } from './HeroRelationWhereInputSchema';

export const HeroRelationListRelationFilterSchema: z.ZodType<Prisma.HeroRelationListRelationFilter> = z.object({
  every: z.lazy(() => HeroRelationWhereInputSchema).optional(),
  some: z.lazy(() => HeroRelationWhereInputSchema).optional(),
  none: z.lazy(() => HeroRelationWhereInputSchema).optional()
}).strict();

export default HeroRelationListRelationFilterSchema;
