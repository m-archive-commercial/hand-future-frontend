import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationCreateWithoutToInputSchema } from './HeroRelationCreateWithoutToInputSchema';
import { HeroRelationUncheckedCreateWithoutToInputSchema } from './HeroRelationUncheckedCreateWithoutToInputSchema';
import { HeroRelationCreateOrConnectWithoutToInputSchema } from './HeroRelationCreateOrConnectWithoutToInputSchema';
import { HeroRelationUpsertWithWhereUniqueWithoutToInputSchema } from './HeroRelationUpsertWithWhereUniqueWithoutToInputSchema';
import { HeroRelationCreateManyToInputEnvelopeSchema } from './HeroRelationCreateManyToInputEnvelopeSchema';
import { HeroRelationWhereUniqueInputSchema } from './HeroRelationWhereUniqueInputSchema';
import { HeroRelationUpdateWithWhereUniqueWithoutToInputSchema } from './HeroRelationUpdateWithWhereUniqueWithoutToInputSchema';
import { HeroRelationUpdateManyWithWhereWithoutToInputSchema } from './HeroRelationUpdateManyWithWhereWithoutToInputSchema';
import { HeroRelationScalarWhereInputSchema } from './HeroRelationScalarWhereInputSchema';

export const HeroRelationUncheckedUpdateManyWithoutToNestedInputSchema: z.ZodType<Prisma.HeroRelationUncheckedUpdateManyWithoutToNestedInput> = z.object({
  create: z.union([ z.lazy(() => HeroRelationCreateWithoutToInputSchema),z.lazy(() => HeroRelationCreateWithoutToInputSchema).array(),z.lazy(() => HeroRelationUncheckedCreateWithoutToInputSchema),z.lazy(() => HeroRelationUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HeroRelationCreateOrConnectWithoutToInputSchema),z.lazy(() => HeroRelationCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HeroRelationUpsertWithWhereUniqueWithoutToInputSchema),z.lazy(() => HeroRelationUpsertWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HeroRelationCreateManyToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HeroRelationWhereUniqueInputSchema),z.lazy(() => HeroRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HeroRelationUpdateWithWhereUniqueWithoutToInputSchema),z.lazy(() => HeroRelationUpdateWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HeroRelationUpdateManyWithWhereWithoutToInputSchema),z.lazy(() => HeroRelationUpdateManyWithWhereWithoutToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HeroRelationScalarWhereInputSchema),z.lazy(() => HeroRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default HeroRelationUncheckedUpdateManyWithoutToNestedInputSchema;
