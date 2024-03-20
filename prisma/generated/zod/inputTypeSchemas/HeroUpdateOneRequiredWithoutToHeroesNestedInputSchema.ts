import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutToHeroesInputSchema } from './HeroCreateWithoutToHeroesInputSchema';
import { HeroUncheckedCreateWithoutToHeroesInputSchema } from './HeroUncheckedCreateWithoutToHeroesInputSchema';
import { HeroCreateOrConnectWithoutToHeroesInputSchema } from './HeroCreateOrConnectWithoutToHeroesInputSchema';
import { HeroUpsertWithoutToHeroesInputSchema } from './HeroUpsertWithoutToHeroesInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroUpdateToOneWithWhereWithoutToHeroesInputSchema } from './HeroUpdateToOneWithWhereWithoutToHeroesInputSchema';
import { HeroUpdateWithoutToHeroesInputSchema } from './HeroUpdateWithoutToHeroesInputSchema';
import { HeroUncheckedUpdateWithoutToHeroesInputSchema } from './HeroUncheckedUpdateWithoutToHeroesInputSchema';

export const HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema: z.ZodType<Prisma.HeroUpdateOneRequiredWithoutToHeroesNestedInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutToHeroesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutToHeroesInputSchema).optional(),
  upsert: z.lazy(() => HeroUpsertWithoutToHeroesInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HeroUpdateToOneWithWhereWithoutToHeroesInputSchema),z.lazy(() => HeroUpdateWithoutToHeroesInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutToHeroesInputSchema) ]).optional(),
}).strict();

export default HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema;
