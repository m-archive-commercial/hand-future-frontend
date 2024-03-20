import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';
import { WorkUpdateWithoutToWorksInputSchema } from './WorkUpdateWithoutToWorksInputSchema';
import { WorkUncheckedUpdateWithoutToWorksInputSchema } from './WorkUncheckedUpdateWithoutToWorksInputSchema';

export const WorkUpdateToOneWithWhereWithoutToWorksInputSchema: z.ZodType<Prisma.WorkUpdateToOneWithWhereWithoutToWorksInput> = z.object({
  where: z.lazy(() => WorkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkUpdateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutToWorksInputSchema) ]),
}).strict();

export default WorkUpdateToOneWithWhereWithoutToWorksInputSchema;
