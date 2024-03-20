import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { NestedEnumTypographyLayoutTypeFilterSchema } from './NestedEnumTypographyLayoutTypeFilterSchema';

export const EnumTypographyLayoutTypeFilterSchema: z.ZodType<Prisma.EnumTypographyLayoutTypeFilter> = z.object({
  equals: z.lazy(() => TypographyLayoutTypeSchema).optional(),
  in: z.lazy(() => TypographyLayoutTypeSchema).array().optional(),
  notIn: z.lazy(() => TypographyLayoutTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TypographyLayoutTypeSchema),z.lazy(() => NestedEnumTypographyLayoutTypeFilterSchema) ]).optional(),
}).strict();

export default EnumTypographyLayoutTypeFilterSchema;
