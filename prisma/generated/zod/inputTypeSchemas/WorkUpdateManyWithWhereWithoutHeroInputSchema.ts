import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkScalarWhereInputSchema } from './WorkScalarWhereInputSchema';
import { WorkUpdateManyMutationInputSchema } from './WorkUpdateManyMutationInputSchema';
import { WorkUncheckedUpdateManyWithoutHeroInputSchema } from './WorkUncheckedUpdateManyWithoutHeroInputSchema';

export const WorkUpdateManyWithWhereWithoutHeroInputSchema: z.ZodType<Prisma.WorkUpdateManyWithWhereWithoutHeroInput> = z.object({
  where: z.lazy(() => WorkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkUpdateManyMutationInputSchema),z.lazy(() => WorkUncheckedUpdateManyWithoutHeroInputSchema) ]),
}).strict();

export default WorkUpdateManyWithWhereWithoutHeroInputSchema;
