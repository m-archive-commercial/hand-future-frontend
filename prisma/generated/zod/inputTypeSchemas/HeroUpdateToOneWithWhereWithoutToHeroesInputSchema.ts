import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { HeroUpdateWithoutToHeroesInputSchema } from './HeroUpdateWithoutToHeroesInputSchema';
import { HeroUncheckedUpdateWithoutToHeroesInputSchema } from './HeroUncheckedUpdateWithoutToHeroesInputSchema';

export const HeroUpdateToOneWithWhereWithoutToHeroesInputSchema: z.ZodType<Prisma.HeroUpdateToOneWithWhereWithoutToHeroesInput> = z.object({
  where: z.lazy(() => HeroWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HeroUpdateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutToHeroesInputSchema) ]),
}).strict();

export default HeroUpdateToOneWithWhereWithoutToHeroesInputSchema;
