import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateWithoutFromWorksInputSchema } from './WorkCreateWithoutFromWorksInputSchema';
import { WorkUncheckedCreateWithoutFromWorksInputSchema } from './WorkUncheckedCreateWithoutFromWorksInputSchema';
import { WorkCreateOrConnectWithoutFromWorksInputSchema } from './WorkCreateOrConnectWithoutFromWorksInputSchema';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';

export const WorkCreateNestedOneWithoutFromWorksInputSchema: z.ZodType<Prisma.WorkCreateNestedOneWithoutFromWorksInput> = z.object({
  create: z.union([ z.lazy(() => WorkCreateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutFromWorksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkCreateOrConnectWithoutFromWorksInputSchema).optional(),
  connect: z.lazy(() => WorkWhereUniqueInputSchema).optional()
}).strict();

export default WorkCreateNestedOneWithoutFromWorksInputSchema;
