import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { HeroUpdateWithoutUserInputSchema } from './HeroUpdateWithoutUserInputSchema';
import { HeroUncheckedUpdateWithoutUserInputSchema } from './HeroUncheckedUpdateWithoutUserInputSchema';

export const HeroUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.HeroUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => HeroWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HeroUpdateWithoutUserInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default HeroUpdateToOneWithWhereWithoutUserInputSchema;
