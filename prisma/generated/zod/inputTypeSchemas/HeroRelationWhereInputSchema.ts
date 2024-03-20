import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { HeroRelationFilterSchema } from './HeroRelationFilterSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroRelationWhereInputSchema: z.ZodType<Prisma.HeroRelationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HeroRelationWhereInputSchema),z.lazy(() => HeroRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HeroRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HeroRelationWhereInputSchema),z.lazy(() => HeroRelationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fromId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => HeroRelationFilterSchema),z.lazy(() => HeroWhereInputSchema) ]).optional(),
  to: z.union([ z.lazy(() => HeroRelationFilterSchema),z.lazy(() => HeroWhereInputSchema) ]).optional(),
}).strict();

export default HeroRelationWhereInputSchema;
