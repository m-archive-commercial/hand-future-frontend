import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { HeroRelationListRelationFilterSchema } from './HeroRelationListRelationFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { WorkListRelationFilterSchema } from './WorkListRelationFilterSchema';

export const HeroWhereUniqueInputSchema: z.ZodType<Prisma.HeroWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => HeroWhereInputSchema),z.lazy(() => HeroWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HeroWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HeroWhereInputSchema),z.lazy(() => HeroWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  photos: z.lazy(() => StringNullableListFilterSchema).optional(),
  avatar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatarOrigin: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cities: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fromHeroes: z.lazy(() => HeroRelationListRelationFilterSchema).optional(),
  toHeroes: z.lazy(() => HeroRelationListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  works: z.lazy(() => WorkListRelationFilterSchema).optional()
}).strict());

export default HeroWhereUniqueInputSchema;
