import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HeroOrderByWithRelationInputSchema } from './HeroOrderByWithRelationInputSchema';
import { WorkRelationOrderByRelationAggregateInputSchema } from './WorkRelationOrderByRelationAggregateInputSchema';

export const WorkOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  heroId: z.lazy(() => SortOrderSchema).optional(),
  layout: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  connections: z.lazy(() => SortOrderSchema).optional(),
  source: z.lazy(() => SortOrderSchema).optional(),
  hero: z.lazy(() => HeroOrderByWithRelationInputSchema).optional(),
  fromWorks: z.lazy(() => WorkRelationOrderByRelationAggregateInputSchema).optional(),
  toWorks: z.lazy(() => WorkRelationOrderByRelationAggregateInputSchema).optional()
}).strict();

export default WorkOrderByWithRelationInputSchema;
