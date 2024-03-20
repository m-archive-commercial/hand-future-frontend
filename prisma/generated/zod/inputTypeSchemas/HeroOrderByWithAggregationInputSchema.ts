import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HeroCountOrderByAggregateInputSchema } from './HeroCountOrderByAggregateInputSchema';
import { HeroMaxOrderByAggregateInputSchema } from './HeroMaxOrderByAggregateInputSchema';
import { HeroMinOrderByAggregateInputSchema } from './HeroMinOrderByAggregateInputSchema';

export const HeroOrderByWithAggregationInputSchema: z.ZodType<Prisma.HeroOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  photos: z.lazy(() => SortOrderSchema).optional(),
  avatar: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatarOrigin: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  cities: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HeroCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HeroMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HeroMinOrderByAggregateInputSchema).optional()
}).strict();

export default HeroOrderByWithAggregationInputSchema;
