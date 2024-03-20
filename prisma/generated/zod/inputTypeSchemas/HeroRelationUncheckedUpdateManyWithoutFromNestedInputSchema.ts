import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationCreateWithoutFromInputSchema } from './HeroRelationCreateWithoutFromInputSchema';
import { HeroRelationUncheckedCreateWithoutFromInputSchema } from './HeroRelationUncheckedCreateWithoutFromInputSchema';
import { HeroRelationCreateOrConnectWithoutFromInputSchema } from './HeroRelationCreateOrConnectWithoutFromInputSchema';
import { HeroRelationUpsertWithWhereUniqueWithoutFromInputSchema } from './HeroRelationUpsertWithWhereUniqueWithoutFromInputSchema';
import { HeroRelationCreateManyFromInputEnvelopeSchema } from './HeroRelationCreateManyFromInputEnvelopeSchema';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationUpdateWithWhereUniqueWithoutFromInputSchema } from './HeroRelationUpdateWithWhereUniqueWithoutFromInputSchema';
import { HeroRelationUpdateManyWithWhereWithoutFromInputSchema } from './HeroRelationUpdateManyWithWhereWithoutFromInputSchema';
import { HeroRelationScalarWhereInputSchema } from './HeroRelationScalarWhereInputSchema';

export const HeroRelationUncheckedUpdateManyWithoutFromNestedInputSchema: z.ZodType<Prisma.HeroRelationUncheckedUpdateManyWithoutFromNestedInput> = z.object({
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutFromInputSchema),z.lazy(() => HeroRelationCreateWithoutFromInputSchema).array(),z.lazy(() => HeroRelationUncheckedCreateWithoutFromInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HeroRelationCreateOrConnectWithoutFromInputSchema),z.lazy(() => HeroRelationCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HeroRelationUpsertWithWhereUniqueWithoutFromInputSchema),z.lazy(() => HeroRelationUpsertWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HeroRelationCreateManyFromInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HeroRelationUpdateWithWhereUniqueWithoutFromInputSchema),z.lazy(() => HeroRelationUpdateWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HeroRelationUpdateManyWithWhereWithoutFromInputSchema),z.lazy(() => HeroRelationUpdateManyWithWhereWithoutFromInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HeroRelationScalarWhereInputSchema),z.lazy(() => HeroRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default HeroRelationUncheckedUpdateManyWithoutFromNestedInputSchema;
