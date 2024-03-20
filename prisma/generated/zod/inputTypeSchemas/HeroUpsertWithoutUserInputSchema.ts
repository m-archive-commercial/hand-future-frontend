import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroUpdateWithoutUserInputSchema } from './HeroUpdateWithoutUserInputSchema';
import { HeroUncheckedUpdateWithoutUserInputSchema } from './HeroUncheckedUpdateWithoutUserInputSchema';
import { HeroCreateWithoutUserInputSchema } from './HeroCreateWithoutUserInputSchema';
import { HeroUncheckedCreateWithoutUserInputSchema } from './HeroUncheckedCreateWithoutUserInputSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';

export const HeroUpsertWithoutUserInputSchema: z.ZodType<Prisma.HeroUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => HeroUpdateWithoutUserInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => HeroCreateWithoutUserInputSchema),z.lazy(() => HeroUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => HeroWhereInputSchema).optional()
}).strict();

export default HeroUpsertWithoutUserInputSchema;
