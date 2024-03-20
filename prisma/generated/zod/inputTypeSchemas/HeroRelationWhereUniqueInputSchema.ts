import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationFromIdToIdCompoundUniqueInputSchema } from './HeroRelationFromIdToIdCompoundUniqueInputSchema';
import { HeroRelationWhereInputSchema } from './HeroRelationWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { HeroRelationFilterSchema } from './HeroRelationFilterSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroRelationWhereUniqueInputSchema: z.ZodType<Prisma.HeroRelationWhereUniqueInput> = z.object({
  fromId_toId: z.lazy(() => HeroRelationFromIdToIdCompoundUniqueInputSchema)
})
.and(z.object({
  fromId_toId: z.lazy(() => HeroRelationFromIdToIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => HeroRelationWhereInputSchema),z.lazy(() => HeroRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HeroRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HeroRelationWhereInputSchema),z.lazy(() => HeroRelationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fromId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => HeroRelationFilterSchema),z.lazy(() => HeroWhereInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => HeroRelationFilterSchema),z.lazy(() => HeroWhereInputSchema) ]).optional(),
}).strict());

export default HeroRelationWhereUniqueInputSchema;
