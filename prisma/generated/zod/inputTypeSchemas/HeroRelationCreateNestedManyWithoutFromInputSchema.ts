import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationCreateWithoutFromInputSchema } from './HeroRelationCreateWithoutFromInputSchema';
import { HeroRelationUncheckedCreateWithoutFromInputSchema } from './HeroRelationUncheckedCreateWithoutFromInputSchema';
import { HeroRelationCreateOrConnectWithoutFromInputSchema } from './HeroRelationCreateOrConnectWithoutFromInputSchema';
import { HeroRelationCreateManyFromInputEnvelopeSchema } from './HeroRelationCreateManyFromInputEnvelopeSchema';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';

export const HeroRelationCreateNestedManyWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationCreateNestedManyWithoutFromInput> = z.object({
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutFromInputSchema),z.lazy(() => HeroRelationCreateWithoutFromInputSchema).array(),z.lazy(() => HeroRelationUncheckedCreateWithoutFromInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HeroRelationCreateOrConnectWithoutFromInputSchema),z.lazy(() => HeroRelationCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HeroRelationCreateManyFromInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default HeroRelationCreateNestedManyWithoutFromInputSchema;
