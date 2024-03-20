import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { WorkCreateconnectionsInputSchema } from './WorkCreateconnectionsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WorkRelationUncheckedCreateNestedManyWithoutFromInputSchema } from './WorkRelationUncheckedCreateNestedManyWithoutFromInputSchema';

export const WorkUncheckedCreateWithoutToWorksInputSchema: z.ZodType<Prisma.WorkUncheckedCreateWithoutToWorksInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  heroId: z.string(),
  layout: z.lazy(() => TypographyLayoutTypeSchema).optional(),
  title: z.string(),
  cover: z.string(),
  description: z.string(),
  content: z.string(),
  connections: z.union([ z.lazy(() => WorkCreateconnectionsInputSchema),z.string().array() ]).optional(),
  source: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  fromWorks: z.lazy(() => WorkRelationUncheckedCreateNestedManyWithoutFromInputSchema).optional()
}).strict();

export default WorkUncheckedCreateWithoutToWorksInputSchema;
