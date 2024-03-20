import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkUpdateWithoutFromWorksInputSchema } from './WorkUpdateWithoutFromWorksInputSchema';
import { WorkUncheckedUpdateWithoutFromWorksInputSchema } from './WorkUncheckedUpdateWithoutFromWorksInputSchema';
import { WorkCreateWithoutFromWorksInputSchema } from './WorkCreateWithoutFromWorksInputSchema';
import { WorkUncheckedCreateWithoutFromWorksInputSchema } from './WorkUncheckedCreateWithoutFromWorksInputSchema';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';

export const WorkUpsertWithoutFromWorksInputSchema: z.ZodType<Prisma.WorkUpsertWithoutFromWorksInput> = z.object({
  update: z.union([ z.lazy(() => WorkUpdateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutFromWorksInputSchema) ]),
  create: z.union([ z.lazy(() => WorkCreateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutFromWorksInputSchema) ]),
  where: z.lazy(() => WorkWhereInputSchema).optional()
}).strict();

export default WorkUpsertWithoutFromWorksInputSchema;
