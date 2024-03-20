import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorkOrderByWithRelationInputSchema } from './WorkOrderByWithRelationInputSchema';

export const WorkRelationOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkRelationOrderByWithRelationInput> = z.object({
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  fromId: z.lazy(() => SortOrderSchema).optional(),
  toId: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => WorkOrderByWithRelationInputSchema).optional(),
  to: z.lazy(() => WorkOrderByWithRelationInputSchema).optional()
}).strict();

export default WorkRelationOrderByWithRelationInputSchema;
