import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkCreateWithoutToWorksInputSchema } from './WorkCreateWithoutToWorksInputSchema';
import { WorkUncheckedCreateWithoutToWorksInputSchema } from './WorkUncheckedCreateWithoutToWorksInputSchema';

export const WorkCreateOrConnectWithoutToWorksInputSchema: z.ZodType<Prisma.WorkCreateOrConnectWithoutToWorksInput> = z.object({
  where: z.lazy(() => WorkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkCreateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutToWorksInputSchema) ]),
}).strict();

export default WorkCreateOrConnectWithoutToWorksInputSchema;
