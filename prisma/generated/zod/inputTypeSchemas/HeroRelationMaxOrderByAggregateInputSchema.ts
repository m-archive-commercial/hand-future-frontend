import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HeroRelationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HeroRelationMaxOrderByAggregateInput> = z.object({
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  fromId: z.lazy(() => SortOrderSchema).optional(),
  toId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HeroRelationMaxOrderByAggregateInputSchema;
