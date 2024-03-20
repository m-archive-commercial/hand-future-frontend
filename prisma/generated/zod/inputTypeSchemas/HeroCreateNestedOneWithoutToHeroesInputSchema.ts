import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutToHeroesInputSchema } from './HeroCreateWithoutToHeroesInputSchema';
import { HeroUncheckedCreateWithoutToHeroesInputSchema } from './HeroUncheckedCreateWithoutToHeroesInputSchema';
import { HeroCreateOrConnectWithoutToHeroesInputSchema } from './HeroCreateOrConnectWithoutToHeroesInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';

export const HeroCreateNestedOneWithoutToHeroesInputSchema: z.ZodType<Prisma.HeroCreateNestedOneWithoutToHeroesInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutToHeroesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutToHeroesInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional()
}).strict();

export default HeroCreateNestedOneWithoutToHeroesInputSchema;
