import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroUpdateWithoutFromHeroesInputSchema } from './HeroUpdateWithoutFromHeroesInputSchema';
import { HeroUncheckedUpdateWithoutFromHeroesInputSchema } from './HeroUncheckedUpdateWithoutFromHeroesInputSchema';
import { HeroCreateWithoutFromHeroesInputSchema } from './HeroCreateWithoutFromHeroesInputSchema';
import { HeroUncheckedCreateWithoutFromHeroesInputSchema } from './HeroUncheckedCreateWithoutFromHeroesInputSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroUpsertWithoutFromHeroesInputSchema: z.ZodType<Prisma.HeroUpsertWithoutFromHeroesInput> = z.object({
  update: z.union([ z.lazy(() => HeroUpdateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutFromHeroesInputSchema) ]),
  create: z.union([ z.lazy(() => HeroCreateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutFromHeroesInputSchema) ]),
  where: z.lazy(() => HeroWhereInputSchema).optional()
}).strict();

export default HeroUpsertWithoutFromHeroesInputSchema;
