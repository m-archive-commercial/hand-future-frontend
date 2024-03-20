import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationUpdateWithoutFromInputSchema } from './HeroRelationUpdateWithoutFromInputSchema';
import { HeroRelationUncheckedUpdateWithoutFromInputSchema } from './HeroRelationUncheckedUpdateWithoutFromInputSchema';
import { HeroRelationCreateWithoutFromInputSchema } from './HeroRelationCreateWithoutFromInputSchema';
import { HeroRelationUncheckedCreateWithoutFromInputSchema } from './HeroRelationUncheckedCreateWithoutFromInputSchema';

export const HeroRelationUpsertWithWhereUniqueWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationUpsertWithWhereUniqueWithoutFromInput> = z.object({
  where: z.lazy(() => HeroRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HeroRelationUpdateWithoutFromInputSchema),z.lazy(() => HeroRelationUncheckedUpdateWithoutFromInputSchema) ]),
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutFromInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutFromInputSchema) ]),
}).strict();

export default HeroRelationUpsertWithWhereUniqueWithoutFromInputSchema;
