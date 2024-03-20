import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumTypographyLayoutTypeFilterSchema } from './EnumTypographyLayoutTypeFilterSchema';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { HeroRelationFilterSchema } from './HeroRelationFilterSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { WorkRelationListRelationFilterSchema } from './WorkRelationListRelationFilterSchema';

export const WorkWhereUniqueInputSchema: z.ZodType<Prisma.WorkWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => WorkWhereInputSchema),z.lazy(() => WorkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkWhereInputSchema),z.lazy(() => WorkWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  heroId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  layout: z.union([ z.lazy(() => EnumTypographyLayoutTypeFilterSchema),z.lazy(() => TypographyLayoutTypeSchema) ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  connections: z.lazy(() => StringNullableListFilterSchema).optional(),
  source: z.lazy(() => JsonFilterSchema).optional(),
  hero: z.union([ z.lazy(() => HeroRelationFilterSchema),z.lazy(() => HeroWhereInputSchema) ]).optional(),
  fromWorks: z.lazy(() => WorkRelationListRelationFilterSchema).optional(),
  toWorks: z.lazy(() => WorkRelationListRelationFilterSchema).optional()
}).strict());

export default WorkWhereUniqueInputSchema;
