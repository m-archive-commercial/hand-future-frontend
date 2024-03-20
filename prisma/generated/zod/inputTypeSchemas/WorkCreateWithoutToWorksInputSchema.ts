import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { WorkCreateconnectionsInputSchema } from './WorkCreateconnectionsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { HeroCreateNestedOneWithoutWorksInputSchema } from './HeroCreateNestedOneWithoutWorksInputSchema';
import { WorkRelationCreateNestedManyWithoutFromInputSchema } from './WorkRelationCreateNestedManyWithoutFromInputSchema';

export const WorkCreateWithoutToWorksInputSchema: z.ZodType<Prisma.WorkCreateWithoutToWorksInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  layout: z.lazy(() => TypographyLayoutTypeSchema).optional(),
  title: z.string(),
  cover: z.string(),
  description: z.string(),
  content: z.string(),
  connections: z.union([ z.lazy(() => WorkCreateconnectionsInputSchema),z.string().array() ]).optional(),
  source: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  hero: z.lazy(() => HeroCreateNestedOneWithoutWorksInputSchema),
  fromWorks: z.lazy(() => WorkRelationCreateNestedManyWithoutFromInputSchema).optional()
}).strict();

export default WorkCreateWithoutToWorksInputSchema;
