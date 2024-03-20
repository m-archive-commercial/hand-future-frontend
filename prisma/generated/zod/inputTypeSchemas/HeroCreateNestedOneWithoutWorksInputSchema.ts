import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutWorksInputSchema } from './HeroCreateWithoutWorksInputSchema';
import { HeroUncheckedCreateWithoutWorksInputSchema } from './HeroUncheckedCreateWithoutWorksInputSchema';
import { HeroCreateOrConnectWithoutWorksInputSchema } from './HeroCreateOrConnectWithoutWorksInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';

export const HeroCreateNestedOneWithoutWorksInputSchema: z.ZodType<Prisma.HeroCreateNestedOneWithoutWorksInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutWorksInputSchema),z.lazy(() => HeroUncheckedCreateWithoutWorksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutWorksInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional()
}).strict();

export default HeroCreateNestedOneWithoutWorksInputSchema;
