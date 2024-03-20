import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutFromHeroesInputSchema } from './HeroCreateWithoutFromHeroesInputSchema';
import { HeroUncheckedCreateWithoutFromHeroesInputSchema } from './HeroUncheckedCreateWithoutFromHeroesInputSchema';
import { HeroCreateOrConnectWithoutFromHeroesInputSchema } from './HeroCreateOrConnectWithoutFromHeroesInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';

export const HeroCreateNestedOneWithoutFromHeroesInputSchema: z.ZodType<Prisma.HeroCreateNestedOneWithoutFromHeroesInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutFromHeroesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutFromHeroesInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional()
}).strict();

export default HeroCreateNestedOneWithoutFromHeroesInputSchema;
