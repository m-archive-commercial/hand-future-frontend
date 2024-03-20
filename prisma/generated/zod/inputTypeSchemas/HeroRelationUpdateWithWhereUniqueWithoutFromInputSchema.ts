import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationUpdateWithoutFromInputSchema } from './HeroRelationUpdateWithoutFromInputSchema';
import { HeroRelationUncheckedUpdateWithoutFromInputSchema } from './HeroRelationUncheckedUpdateWithoutFromInputSchema';

export const HeroRelationUpdateWithWhereUniqueWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationUpdateWithWhereUniqueWithoutFromInput> = z.object({
  where: z.lazy(() => HeroRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HeroRelationUpdateWithoutFromInputSchema),z.lazy(() => HeroRelationUncheckedUpdateWithoutFromInputSchema) ]),
}).strict();

export default HeroRelationUpdateWithWhereUniqueWithoutFromInputSchema;
