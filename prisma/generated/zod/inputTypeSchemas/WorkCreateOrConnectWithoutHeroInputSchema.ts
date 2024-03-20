import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkCreateWithoutHeroInputSchema } from './WorkCreateWithoutHeroInputSchema';
import { WorkUncheckedCreateWithoutHeroInputSchema } from './WorkUncheckedCreateWithoutHeroInputSchema';

export const WorkCreateOrConnectWithoutHeroInputSchema: z.ZodType<Prisma.WorkCreateOrConnectWithoutHeroInput> = z.object({
  where: z.lazy(() => WorkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkCreateWithoutHeroInputSchema),z.lazy(() => WorkUncheckedCreateWithoutHeroInputSchema) ]),
}).strict();

export default WorkCreateOrConnectWithoutHeroInputSchema;
