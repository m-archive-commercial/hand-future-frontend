import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateNestedOneWithoutToWorksInputSchema } from './WorkCreateNestedOneWithoutToWorksInputSchema';

export const WorkRelationCreateWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationCreateWithoutFromInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  to: z.lazy(() => WorkCreateNestedOneWithoutToWorksInputSchema)
}).strict();

export default WorkRelationCreateWithoutFromInputSchema;
