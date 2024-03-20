import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroUpdateWithoutWorksInputSchema } from './HeroUpdateWithoutWorksInputSchema';
import { HeroUncheckedUpdateWithoutWorksInputSchema } from './HeroUncheckedUpdateWithoutWorksInputSchema';
import { HeroCreateWithoutWorksInputSchema } from './HeroCreateWithoutWorksInputSchema';
import { HeroUncheckedCreateWithoutWorksInputSchema } from './HeroUncheckedCreateWithoutWorksInputSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroUpsertWithoutWorksInputSchema: z.ZodType<Prisma.HeroUpsertWithoutWorksInput> = z.object({
  update: z.union([ z.lazy(() => HeroUpdateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutWorksInputSchema) ]),
  create: z.union([ z.lazy(() => HeroCreateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedCreateWithoutWorksInputSchema) ]),
  where: z.lazy(() => HeroWhereInputSchema).optional()
}).strict();

export default HeroUpsertWithoutWorksInputSchema;
