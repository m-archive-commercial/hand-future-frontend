import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationCreateWithoutToInputSchema } from './HeroRelationCreateWithoutToInputSchema';
import { HeroRelationUncheckedCreateWithoutToInputSchema } from './HeroRelationUncheckedCreateWithoutToInputSchema';

export const HeroRelationCreateOrConnectWithoutToInputSchema: z.ZodType<Prisma.HeroRelationCreateOrConnectWithoutToInput> = z.object({
  where: z.lazy(() => HeroRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutToInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutToInputSchema) ]),
}).strict();

export default HeroRelationCreateOrConnectWithoutToInputSchema;
