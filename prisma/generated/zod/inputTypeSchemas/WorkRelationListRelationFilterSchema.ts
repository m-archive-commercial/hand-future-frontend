import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereInputSchema } from './WorkRelationWhereInputSchema';

export const WorkRelationListRelationFilterSchema: z.ZodType<Prisma.WorkRelationListRelationFilter> = z.object({
  every: z.lazy(() => WorkRelationWhereInputSchema).optional(),
  some: z.lazy(() => WorkRelationWhereInputSchema).optional(),
  none: z.lazy(() => WorkRelationWhereInputSchema).optional()
}).strict();

export default WorkRelationListRelationFilterSchema;
