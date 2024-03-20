import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const HeroRelationScalarWhereInputSchema: z.ZodType<Prisma.HeroRelationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HeroRelationScalarWhereInputSchema),z.lazy(() => HeroRelationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HeroRelationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HeroRelationScalarWhereInputSchema),z.lazy(() => HeroRelationScalarWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fromId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  toId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default HeroRelationScalarWhereInputSchema;
