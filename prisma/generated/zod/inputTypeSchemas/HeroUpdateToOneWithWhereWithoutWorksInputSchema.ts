import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { HeroUpdateWithoutWorksInputSchema } from './HeroUpdateWithoutWorksInputSchema';
import { HeroUncheckedUpdateWithoutWorksInputSchema } from './HeroUncheckedUpdateWithoutWorksInputSchema';

export const HeroUpdateToOneWithWhereWithoutWorksInputSchema: z.ZodType<Prisma.HeroUpdateToOneWithWhereWithoutWorksInput> = z.object({
  where: z.lazy(() => HeroWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HeroUpdateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutWorksInputSchema) ]),
}).strict();

export default HeroUpdateToOneWithWhereWithoutWorksInputSchema;
