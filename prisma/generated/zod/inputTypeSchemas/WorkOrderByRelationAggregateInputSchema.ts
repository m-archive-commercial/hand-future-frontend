import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorkOrderByRelationAggregateInputSchema;
