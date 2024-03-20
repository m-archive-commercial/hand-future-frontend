import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroCreateWithoutFromHeroesInputSchema } from './HeroCreateWithoutFromHeroesInputSchema';
import { HeroUncheckedCreateWithoutFromHeroesInputSchema } from './HeroUncheckedCreateWithoutFromHeroesInputSchema';

export const HeroCreateOrConnectWithoutFromHeroesInputSchema: z.ZodType<Prisma.HeroCreateOrConnectWithoutFromHeroesInput> = z.object({
  where: z.lazy(() => HeroWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HeroCreateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutFromHeroesInputSchema) ]),
}).strict();

export default HeroCreateOrConnectWithoutFromHeroesInputSchema;
