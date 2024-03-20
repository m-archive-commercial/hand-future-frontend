import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { HeroUpdateWithoutFromHeroesInputSchema } from './HeroUpdateWithoutFromHeroesInputSchema';
import { HeroUncheckedUpdateWithoutFromHeroesInputSchema } from './HeroUncheckedUpdateWithoutFromHeroesInputSchema';

export const HeroUpdateToOneWithWhereWithoutFromHeroesInputSchema: z.ZodType<Prisma.HeroUpdateToOneWithWhereWithoutFromHeroesInput> = z.object({
  where: z.lazy(() => HeroWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HeroUpdateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutFromHeroesInputSchema) ]),
}).strict();

export default HeroUpdateToOneWithWhereWithoutFromHeroesInputSchema;
