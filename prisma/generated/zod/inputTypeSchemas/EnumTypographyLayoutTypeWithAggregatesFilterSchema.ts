import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { NestedEnumTypographyLayoutTypeWithAggregatesFilterSchema } from './NestedEnumTypographyLayoutTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTypographyLayoutTypeFilterSchema } from './NestedEnumTypographyLayoutTypeFilterSchema';

export const EnumTypographyLayoutTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTypographyLayoutTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TypographyLayoutTypeSchema).optional(),
  in: z.lazy(() => TypographyLayoutTypeSchema).array().optional(),
  notIn: z.lazy(() => TypographyLayoutTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TypographyLayoutTypeSchema),z.lazy(() => NestedEnumTypographyLayoutTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTypographyLayoutTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTypographyLayoutTypeFilterSchema).optional()
}).strict();

export default EnumTypographyLayoutTypeWithAggregatesFilterSchema;
