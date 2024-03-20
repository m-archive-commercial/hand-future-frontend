import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationFromIdToIdCompoundUniqueInputSchema } from './WorkRelationFromIdToIdCompoundUniqueInputSchema';
import { WorkRelationWhereInputSchema } from './WorkRelationWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { WorkRelationFilterSchema } from './WorkRelationFilterSchema';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';

export const WorkRelationWhereUniqueInputSchema: z.ZodType<Prisma.WorkRelationWhereUniqueInput> = z.object({
  fromId_toId: z.lazy(() => WorkRelationFromIdToIdCompoundUniqueInputSchema)
})
.and(z.object({
  fromId_toId: z.lazy(() => WorkRelationFromIdToIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => WorkRelationWhereInputSchema),z.lazy(() => WorkRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkRelationWhereInputSchema),z.lazy(() => WorkRelationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fromId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => WorkRelationFilterSchema),z.lazy(() => WorkWhereInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => WorkRelationFilterSchema),z.lazy(() => WorkWhereInputSchema) ]).optional(),
}).strict());

export default WorkRelationWhereUniqueInputSchema;
