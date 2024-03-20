import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkCreateWithoutFromWorksInputSchema } from './WorkCreateWithoutFromWorksInputSchema';
import { WorkUncheckedCreateWithoutFromWorksInputSchema } from './WorkUncheckedCreateWithoutFromWorksInputSchema';

export const WorkCreateOrConnectWithoutFromWorksInputSchema: z.ZodType<Prisma.WorkCreateOrConnectWithoutFromWorksInput> = z.object({
  where: z.lazy(() => WorkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkCreateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutFromWorksInputSchema) ]),
}).strict();

export default WorkCreateOrConnectWithoutFromWorksInputSchema;
