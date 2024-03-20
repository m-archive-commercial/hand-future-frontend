import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationUpdateWithoutToInputSchema } from './HeroRelationUpdateWithoutToInputSchema';
import { HeroRelationUncheckedUpdateWithoutToInputSchema } from './HeroRelationUncheckedUpdateWithoutToInputSchema';
import { HeroRelationCreateWithoutToInputSchema } from './HeroRelationCreateWithoutToInputSchema';
import { HeroRelationUncheckedCreateWithoutToInputSchema } from './HeroRelationUncheckedCreateWithoutToInputSchema';

export const HeroRelationUpsertWithWhereUniqueWithoutToInputSchema: z.ZodType<Prisma.HeroRelationUpsertWithWhereUniqueWithoutToInput> = z.object({
  where: z.lazy(() => HeroRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HeroRelationUpdateWithoutToInputSchema),z.lazy(() => HeroRelationUncheckedUpdateWithoutToInputSchema) ]),
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutToInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutToInputSchema) ]),
}).strict();

export default HeroRelationUpsertWithWhereUniqueWithoutToInputSchema;
