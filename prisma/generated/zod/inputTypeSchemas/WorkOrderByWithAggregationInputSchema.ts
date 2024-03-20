import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkCountOrderByAggregateInputSchema } from './WorkCountOrderByAggregateInputSchema';
import { WorkMaxOrderByAggregateInputSchema } from './WorkMaxOrderByAggregateInputSchema';
import { WorkMinOrderByAggregateInputSchema } from './WorkMinOrderByAggregateInputSchema';

export const WorkOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkOrderByWithAggregationInput> = z.object({
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
  _count: z.lazy(() => WorkCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkMinOrderByAggregateInputSchema).optional()
}).strict();

export default WorkOrderByWithAggregationInputSchema;
