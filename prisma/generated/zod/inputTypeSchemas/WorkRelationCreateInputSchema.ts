import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateNestedOneWithoutFromWorksInputSchema } from './WorkCreateNestedOneWithoutFromWorksInputSchema';
import { WorkCreateNestedOneWithoutToWorksInputSchema } from './WorkCreateNestedOneWithoutToWorksInputSchema';

export const WorkRelationCreateInputSchema: z.ZodType<Prisma.WorkRelationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  from: z.lazy(() => WorkCreateNestedOneWithoutFromWorksInputSchema),
  to: z.lazy(() => WorkCreateNestedOneWithoutToWorksInputSchema)
}).strict();

export default WorkRelationCreateInputSchema;
