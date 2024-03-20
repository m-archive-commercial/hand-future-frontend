import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutWorksInputSchema } from './HeroCreateWithoutWorksInputSchema';
import { HeroUncheckedCreateWithoutWorksInputSchema } from './HeroUncheckedCreateWithoutWorksInputSchema';
import { HeroCreateOrConnectWithoutWorksInputSchema } from './HeroCreateOrConnectWithoutWorksInputSchema';
import { HeroUpsertWithoutWorksInputSchema } from './HeroUpsertWithoutWorksInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroUpdateToOneWithWhereWithoutWorksInputSchema } from './HeroUpdateToOneWithWhereWithoutWorksInputSchema';
import { HeroUpdateWithoutWorksInputSchema } from './HeroUpdateWithoutWorksInputSchema';
import { HeroUncheckedUpdateWithoutWorksInputSchema } from './HeroUncheckedUpdateWithoutWorksInputSchema';

export const HeroUpdateOneRequiredWithoutWorksNestedInputSchema: z.ZodType<Prisma.HeroUpdateOneRequiredWithoutWorksNestedInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedCreateWithoutWorksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutWorksInputSchema).optional(),
  upsert: z.lazy(() => HeroUpsertWithoutWorksInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HeroUpdateToOneWithWhereWithoutWorksInputSchema),z.lazy(() => HeroUpdateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutWorksInputSchema) ]).optional(),
}).strict();

export default HeroUpdateOneRequiredWithoutWorksNestedInputSchema;
