import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HeroRelationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HeroRelationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HeroRelationOrderByRelationAggregateInputSchema;
