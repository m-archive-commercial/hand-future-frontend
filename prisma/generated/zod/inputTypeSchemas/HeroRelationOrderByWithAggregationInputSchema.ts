import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HeroRelationCountOrderByAggregateInputSchema } from './HeroRelationCountOrderByAggregateInputSchema';
import { HeroRelationMaxOrderByAggregateInputSchema } from './HeroRelationMaxOrderByAggregateInputSchema';
import { HeroRelationMinOrderByAggregateInputSchema } from './HeroRelationMinOrderByAggregateInputSchema';

export const HeroRelationOrderByWithAggregationInputSchema: z.ZodType<Prisma.HeroRelationOrderByWithAggregationInput> = z.object({
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  fromId: z.lazy(() => SortOrderSchema).optional(),
  toId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HeroRelationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HeroRelationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HeroRelationMinOrderByAggregateInputSchema).optional()
}).strict();

export default HeroRelationOrderByWithAggregationInputSchema;
