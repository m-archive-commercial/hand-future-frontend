import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateWithoutToWorksInputSchema } from './WorkCreateWithoutToWorksInputSchema';
import { WorkUncheckedCreateWithoutToWorksInputSchema } from './WorkUncheckedCreateWithoutToWorksInputSchema';
import { WorkCreateOrConnectWithoutToWorksInputSchema } from './WorkCreateOrConnectWithoutToWorksInputSchema';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';

export const WorkCreateNestedOneWithoutToWorksInputSchema: z.ZodType<Prisma.WorkCreateNestedOneWithoutToWorksInput> = z.object({
  create: z.union([ z.lazy(() => WorkCreateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutToWorksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkCreateOrConnectWithoutToWorksInputSchema).optional(),
  connect: z.lazy(() => WorkWhereUniqueInputSchema).optional()
}).strict();

export default WorkCreateNestedOneWithoutToWorksInputSchema;
