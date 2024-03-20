import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { HeroRelationListRelationFilterSchema } from './HeroRelationListRelationFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { WorkListRelationFilterSchema } from './WorkListRelationFilterSchema';

export const HeroWhereInputSchema: z.ZodType<Prisma.HeroWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HeroWhereInputSchema),z.lazy(() => HeroWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HeroWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HeroWhereInputSchema),z.lazy(() => HeroWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  photos: z.lazy(() => StringNullableListFilterSchema).optional(),
  avatar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatarOrigin: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  cities: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fromHeroes: z.lazy(() => HeroRelationListRelationFilterSchema).optional(),
  toHeroes: z.lazy(() => HeroRelationListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  works: z.lazy(() => WorkListRelationFilterSchema).optional()
}).strict();

export default HeroWhereInputSchema;
