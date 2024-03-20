import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkUpdateWithoutHeroInputSchema } from './WorkUpdateWithoutHeroInputSchema';
import { WorkUncheckedUpdateWithoutHeroInputSchema } from './WorkUncheckedUpdateWithoutHeroInputSchema';

export const WorkUpdateWithWhereUniqueWithoutHeroInputSchema: z.ZodType<Prisma.WorkUpdateWithWhereUniqueWithoutHeroInput> = z.object({
  where: z.lazy(() => WorkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkUpdateWithoutHeroInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutHeroInputSchema) ]),
}).strict();

export default WorkUpdateWithWhereUniqueWithoutHeroInputSchema;
