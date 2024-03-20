import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';

export const WorkListRelationFilterSchema: z.ZodType<Prisma.WorkListRelationFilter> = z.object({
  every: z.lazy(() => WorkWhereInputSchema).optional(),
  some: z.lazy(() => WorkWhereInputSchema).optional(),
  none: z.lazy(() => WorkWhereInputSchema).optional()
}).strict();

export default WorkListRelationFilterSchema;
