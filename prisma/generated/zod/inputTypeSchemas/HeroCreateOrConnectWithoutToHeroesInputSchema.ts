import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroCreateWithoutToHeroesInputSchema } from './HeroCreateWithoutToHeroesInputSchema';
import { HeroUncheckedCreateWithoutToHeroesInputSchema } from './HeroUncheckedCreateWithoutToHeroesInputSchema';

export const HeroCreateOrConnectWithoutToHeroesInputSchema: z.ZodType<Prisma.HeroCreateOrConnectWithoutToHeroesInput> = z.object({
  where: z.lazy(() => HeroWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HeroCreateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutToHeroesInputSchema) ]),
}).strict();

export default HeroCreateOrConnectWithoutToHeroesInputSchema;
