import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';
import { NestedEnumRoleTypeFilterSchema } from './NestedEnumRoleTypeFilterSchema';

export const EnumRoleTypeFilterSchema: z.ZodType<Prisma.EnumRoleTypeFilter> = z.object({
  equals: z.lazy(() => RoleTypeSchema).optional(),
  in: z.lazy(() => RoleTypeSchema).array().optional(),
  notIn: z.lazy(() => RoleTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleTypeSchema),z.lazy(() => NestedEnumRoleTypeFilterSchema) ]).optional(),
}).strict();

export default EnumRoleTypeFilterSchema;
