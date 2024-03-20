import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroCreateWithoutUserInputSchema } from './HeroCreateWithoutUserInputSchema';
import { HeroUncheckedCreateWithoutUserInputSchema } from './HeroUncheckedCreateWithoutUserInputSchema';

export const HeroCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.HeroCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => HeroWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HeroCreateWithoutUserInputSchema),z.lazy(() => HeroUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default HeroCreateOrConnectWithoutUserInputSchema;
