import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateNestedOneWithoutFromWorksInputSchema } from './WorkCreateNestedOneWithoutFromWorksInputSchema';

export const WorkRelationCreateWithoutToInputSchema: z.ZodType<Prisma.WorkRelationCreateWithoutToInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  from: z.lazy(() => WorkCreateNestedOneWithoutFromWorksInputSchema)
}).strict();

export default WorkRelationCreateWithoutToInputSchema;
