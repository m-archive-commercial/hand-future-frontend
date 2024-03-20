import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroUpdateWithoutToHeroesInputSchema } from './HeroUpdateWithoutToHeroesInputSchema';
import { HeroUncheckedUpdateWithoutToHeroesInputSchema } from './HeroUncheckedUpdateWithoutToHeroesInputSchema';
import { HeroCreateWithoutToHeroesInputSchema } from './HeroCreateWithoutToHeroesInputSchema';
import { HeroUncheckedCreateWithoutToHeroesInputSchema } from './HeroUncheckedCreateWithoutToHeroesInputSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroUpsertWithoutToHeroesInputSchema: z.ZodType<Prisma.HeroUpsertWithoutToHeroesInput> = z.object({
  update: z.union([ z.lazy(() => HeroUpdateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutToHeroesInputSchema) ]),
  create: z.union([ z.lazy(() => HeroCreateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutToHeroesInputSchema) ]),
  where: z.lazy(() => HeroWhereInputSchema).optional()
}).strict();

export default HeroUpsertWithoutToHeroesInputSchema;
