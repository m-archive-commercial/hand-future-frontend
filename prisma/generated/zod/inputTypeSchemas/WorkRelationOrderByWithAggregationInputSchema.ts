import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkRelationCountOrderByAggregateInputSchema } from './WorkRelationCountOrderByAggregateInputSchema';
import { WorkRelationMaxOrderByAggregateInputSchema } from './WorkRelationMaxOrderByAggregateInputSchema';
import { WorkRelationMinOrderByAggregateInputSchema } from './WorkRelationMinOrderByAggregateInputSchema';

export const WorkRelationOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkRelationOrderByWithAggregationInput> = z.object({
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  fromId: z.lazy(() => SortOrderSchema).optional(),
  toId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkRelationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkRelationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkRelationMinOrderByAggregateInputSchema).optional()
}).strict();

export default WorkRelationOrderByWithAggregationInputSchema;
