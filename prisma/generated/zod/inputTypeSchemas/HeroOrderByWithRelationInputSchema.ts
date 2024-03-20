import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HeroRelationOrderByRelationAggregateInputSchema } from './HeroRelationOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { WorkOrderByRelationAggregateInputSchema } from './WorkOrderByRelationAggregateInputSchema';

export const HeroOrderByWithRelationInputSchema: z.ZodType<Prisma.HeroOrderByWithRelationInput> = z.object({
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
  fromHeroes: z.lazy(() => HeroRelationOrderByRelationAggregateInputSchema).optional(),
  toHeroes: z.lazy(() => HeroRelationOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  works: z.lazy(() => WorkOrderByRelationAggregateInputSchema).optional()
}).strict();

export default HeroOrderByWithRelationInputSchema;
