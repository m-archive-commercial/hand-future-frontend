import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereInputSchema } from './WorkWhereInputSchema';
import { WorkUpdateWithoutFromWorksInputSchema } from './WorkUpdateWithoutFromWorksInputSchema';
import { WorkUncheckedUpdateWithoutFromWorksInputSchema } from './WorkUncheckedUpdateWithoutFromWorksInputSchema';

export const WorkUpdateToOneWithWhereWithoutFromWorksInputSchema: z.ZodType<Prisma.WorkUpdateToOneWithWhereWithoutFromWorksInput> = z.object({
  where: z.lazy(() => WorkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkUpdateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutFromWorksInputSchema) ]),
}).strict();

export default WorkUpdateToOneWithWhereWithoutFromWorksInputSchema;
