import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkRelationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkRelationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorkRelationOrderByRelationAggregateInputSchema;
