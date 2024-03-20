import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const HeroRelationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HeroRelationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HeroRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => HeroRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HeroRelationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HeroRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => HeroRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  fromId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  toId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default HeroRelationScalarWhereWithAggregatesInputSchema;
