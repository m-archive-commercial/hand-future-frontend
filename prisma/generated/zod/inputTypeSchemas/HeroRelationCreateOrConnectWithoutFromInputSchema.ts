import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationCreateWithoutFromInputSchema } from './HeroRelationCreateWithoutFromInputSchema';
import { HeroRelationUncheckedCreateWithoutFromInputSchema } from './HeroRelationUncheckedCreateWithoutFromInputSchema';

export const HeroRelationCreateOrConnectWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationCreateOrConnectWithoutFromInput> = z.object({
  where: z.lazy(() => HeroRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutFromInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutFromInputSchema) ]),
}).strict();

export default HeroRelationCreateOrConnectWithoutFromInputSchema;
