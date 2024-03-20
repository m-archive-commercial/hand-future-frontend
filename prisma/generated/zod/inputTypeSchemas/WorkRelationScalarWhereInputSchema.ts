import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const WorkRelationScalarWhereInputSchema: z.ZodType<Prisma.WorkRelationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkRelationScalarWhereInputSchema),z.lazy(() => WorkRelationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkRelationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkRelationScalarWhereInputSchema),z.lazy(() => WorkRelationScalarWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fromId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default WorkRelationScalarWhereInputSchema;
