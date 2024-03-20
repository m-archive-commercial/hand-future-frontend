import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumTypographyLayoutTypeFilterSchema } from './EnumTypographyLayoutTypeFilterSchema';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';

export const WorkScalarWhereInputSchema: z.ZodType<Prisma.WorkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkScalarWhereInputSchema),z.lazy(() => WorkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkScalarWhereInputSchema),z.lazy(() => WorkScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  heroId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  layout: z.union([ z.lazy(() => EnumTypographyLayoutTypeFilterSchema),z.lazy(() => TypographyLayoutTypeSchema) ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  connections: z.lazy(() => StringNullableListFilterSchema).optional(),
  source: z.lazy(() => JsonFilterSchema).optional()
}).strict();

export default WorkScalarWhereInputSchema;
