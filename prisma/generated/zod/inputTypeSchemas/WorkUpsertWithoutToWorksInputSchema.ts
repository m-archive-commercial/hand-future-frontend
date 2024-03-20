import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkUpdateWithoutToWorksInputSchema } from './WorkUpdateWithoutToWorksInputSchema';
import { WorkUncheckedUpdateWithoutToWorksInputSchema } from './WorkUncheckedUpdateWithoutToWorksInputSchema';
import { WorkCreateWithoutToWorksInputSchema } from './WorkCreateWithoutToWorksInputSchema';
import { WorkUncheckedCreateWithoutToWorksInputSchema } from './WorkUncheckedCreateWithoutToWorksInputSchema';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';

export const WorkUpsertWithoutToWorksInputSchema: z.ZodType<Prisma.WorkUpsertWithoutToWorksInput> = z.object({
  update: z.union([ z.lazy(() => WorkUpdateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutToWorksInputSchema) ]),
  create: z.union([ z.lazy(() => WorkCreateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutToWorksInputSchema) ]),
  where: z.lazy(() => WorkWhereInputSchema).optional()
}).strict();

export default WorkUpsertWithoutToWorksInputSchema;
