import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutUserInputSchema } from './HeroCreateWithoutUserInputSchema';
import { HeroUncheckedCreateWithoutUserInputSchema } from './HeroUncheckedCreateWithoutUserInputSchema';
import { HeroCreateOrConnectWithoutUserInputSchema } from './HeroCreateOrConnectWithoutUserInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';

export const HeroCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.HeroCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutUserInputSchema),z.lazy(() => HeroUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional()
}).strict();

export default HeroCreateNestedOneWithoutUserInputSchema;
