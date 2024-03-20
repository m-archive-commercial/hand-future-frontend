import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumRoleTypeFilterSchema } from './EnumRoleTypeFilterSchema';
import { RoleTypeSchema } from './RoleTypeSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { HeroNullableRelationFilterSchema } from './HeroNullableRelationFilterSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleTypeFilterSchema),z.lazy(() => RoleTypeSchema) ]).optional(),
  hashedPassword: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  activated: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  activationCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hero: z.union([ z.lazy(() => HeroNullableRelationFilterSchema),z.lazy(() => HeroWhereInputSchema) ]).optional().nullable(),
}).strict());

export default UserWhereUniqueInputSchema;
