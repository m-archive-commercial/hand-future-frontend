import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationCreateWithoutToInputSchema } from './HeroRelationCreateWithoutToInputSchema';
import { HeroRelationUncheckedCreateWithoutToInputSchema } from './HeroRelationUncheckedCreateWithoutToInputSchema';
import { HeroRelationCreateOrConnectWithoutToInputSchema } from './HeroRelationCreateOrConnectWithoutToInputSchema';
import { HeroRelationCreateManyToInputEnvelopeSchema } from './HeroRelationCreateManyToInputEnvelopeSchema';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';

export const HeroRelationCreateNestedManyWithoutToInputSchema: z.ZodType<Prisma.HeroRelationCreateNestedManyWithoutToInput> = z.object({
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutToInputSchema),z.lazy(() => HeroRelationCreateWithoutToInputSchema).array(),z.lazy(() => HeroRelationUncheckedCreateWithoutToInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HeroRelationCreateOrConnectWithoutToInputSchema),z.lazy(() => HeroRelationCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HeroRelationCreateManyToInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default HeroRelationCreateNestedManyWithoutToInputSchema;
