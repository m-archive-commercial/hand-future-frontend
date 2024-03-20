import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutFromHeroesInputSchema } from './HeroCreateWithoutFromHeroesInputSchema';
import { HeroUncheckedCreateWithoutFromHeroesInputSchema } from './HeroUncheckedCreateWithoutFromHeroesInputSchema';
import { HeroCreateOrConnectWithoutFromHeroesInputSchema } from './HeroCreateOrConnectWithoutFromHeroesInputSchema';
import { HeroUpsertWithoutFromHeroesInputSchema } from './HeroUpsertWithoutFromHeroesInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroUpdateToOneWithWhereWithoutFromHeroesInputSchema } from './HeroUpdateToOneWithWhereWithoutFromHeroesInputSchema';
import { HeroUpdateWithoutFromHeroesInputSchema } from './HeroUpdateWithoutFromHeroesInputSchema';
import { HeroUncheckedUpdateWithoutFromHeroesInputSchema } from './HeroUncheckedUpdateWithoutFromHeroesInputSchema';

export const HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema: z.ZodType<Prisma.HeroUpdateOneRequiredWithoutFromHeroesNestedInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedCreateWithoutFromHeroesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutFromHeroesInputSchema).optional(),
  upsert: z.lazy(() => HeroUpsertWithoutFromHeroesInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HeroUpdateToOneWithWhereWithoutFromHeroesInputSchema),z.lazy(() => HeroUpdateWithoutFromHeroesInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutFromHeroesInputSchema) ]).optional(),
}).strict();

export default HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema;
