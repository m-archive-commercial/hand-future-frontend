import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationUpdateWithoutToInputSchema } from './HeroRelationUpdateWithoutToInputSchema';
import { HeroRelationUncheckedUpdateWithoutToInputSchema } from './HeroRelationUncheckedUpdateWithoutToInputSchema';

export const HeroRelationUpdateWithWhereUniqueWithoutToInputSchema: z.ZodType<Prisma.HeroRelationUpdateWithWhereUniqueWithoutToInput> = z.object({
  where: z.lazy(() => HeroRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HeroRelationUpdateWithoutToInputSchema),z.lazy(() => HeroRelationUncheckedUpdateWithoutToInputSchema) ]),
}).strict();

export default HeroRelationUpdateWithWhereUniqueWithoutToInputSchema;
