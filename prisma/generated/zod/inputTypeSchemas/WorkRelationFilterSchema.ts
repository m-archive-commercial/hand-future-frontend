import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';

export const WorkRelationFilterSchema: z.ZodType<Prisma.WorkRelationFilter> = z.object({
  is: z.lazy(() => WorkWhereInputSchema).optional(),
  isNot: z.lazy(() => WorkWhereInputSchema).optional()
}).strict();

export default WorkRelationFilterSchema;
