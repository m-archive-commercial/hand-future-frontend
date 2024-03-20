import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroCreateWithoutWorksInputSchema } from './HeroCreateWithoutWorksInputSchema';
import { HeroUncheckedCreateWithoutWorksInputSchema } from './HeroUncheckedCreateWithoutWorksInputSchema';

export const HeroCreateOrConnectWithoutWorksInputSchema: z.ZodType<Prisma.HeroCreateOrConnectWithoutWorksInput> = z.object({
  where: z.lazy(() => HeroWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HeroCreateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedCreateWithoutWorksInputSchema) ]),
}).strict();

export default HeroCreateOrConnectWithoutWorksInputSchema;
