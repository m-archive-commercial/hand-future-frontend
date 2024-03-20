import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumTypographyLayoutTypeWithAggregatesFilterSchema } from './EnumTypographyLayoutTypeWithAggregatesFilterSchema';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';

export const WorkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WorkScalarWhereWithAggregatesInputSchema),z.lazy(() => WorkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkScalarWhereWithAggregatesInputSchema),z.lazy(() => WorkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  heroId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  layout: z.union([ z.lazy(() => EnumTypographyLayoutTypeWithAggregatesFilterSchema),z.lazy(() => TypographyLayoutTypeSchema) ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  connections: z.lazy(() => StringNullableListFilterSchema).optional(),
  source: z.lazy(() => JsonWithAggregatesFilterSchema).optional()
}).strict();

export default WorkScalarWhereWithAggregatesInputSchema;
