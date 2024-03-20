import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkUpdateWithoutHeroInputSchema } from './WorkUpdateWithoutHeroInputSchema';
import { WorkUncheckedUpdateWithoutHeroInputSchema } from './WorkUncheckedUpdateWithoutHeroInputSchema';
import { WorkCreateWithoutHeroInputSchema } from './WorkCreateWithoutHeroInputSchema';
import { WorkUncheckedCreateWithoutHeroInputSchema } from './WorkUncheckedCreateWithoutHeroInputSchema';

export const WorkUpsertWithWhereUniqueWithoutHeroInputSchema: z.ZodType<Prisma.WorkUpsertWithWhereUniqueWithoutHeroInput> = z.object({
  where: z.lazy(() => WorkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkUpdateWithoutHeroInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutHeroInputSchema) ]),
  create: z.union([ z.lazy(() => WorkCreateWithoutHeroInputSchema),z.lazy(() => WorkUncheckedCreateWithoutHeroInputSchema) ]),
}).strict();

export default WorkUpsertWithWhereUniqueWithoutHeroInputSchema;
