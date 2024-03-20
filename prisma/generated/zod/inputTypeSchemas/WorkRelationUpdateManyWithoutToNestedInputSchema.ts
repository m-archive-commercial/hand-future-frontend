import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationCreateWithoutToInputSchema } from './WorkRelationCreateWithoutToInputSchema';
import { WorkRelationUncheckedCreateWithoutToInputSchema } from './WorkRelationUncheckedCreateWithoutToInputSchema';
import { WorkRelationCreateOrConnectWithoutToInputSchema } from './WorkRelationCreateOrConnectWithoutToInputSchema';
import { WorkRelationUpsertWithWhereUniqueWithoutToInputSchema } from './WorkRelationUpsertWithWhereUniqueWithoutToInputSchema';
import { WorkRelationCreateManyToInputEnvelopeSchema } from './WorkRelationCreateManyToInputEnvelopeSchema';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationUpdateWithWhereUniqueWithoutToInputSchema } from './WorkRelationUpdateWithWhereUniqueWithoutToInputSchema';
import { WorkRelationUpdateManyWithWhereWithoutToInputSchema } from './WorkRelationUpdateManyWithWhereWithoutToInputSchema';
import { WorkRelationScalarWhereInputSchema } from './WorkRelationScalarWhereInputSchema';

export const WorkRelationUpdateManyWithoutToNestedInputSchema: z.ZodType<Prisma.WorkRelationUpdateManyWithoutToNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutToInputSchema),z.lazy(() => WorkRelationCreateWithoutToInputSchema).array(),z.lazy(() => WorkRelationUncheckedCreateWithoutToInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkRelationCreateOrConnectWithoutToInputSchema),z.lazy(() => WorkRelationCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkRelationUpsertWithWhereUniqueWithoutToInputSchema),z.lazy(() => WorkRelationUpsertWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkRelationCreateManyToInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkRelationUpdateWithWhereUniqueWithoutToInputSchema),z.lazy(() => WorkRelationUpdateWithWhereUniqueWithoutToInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkRelationUpdateManyWithWhereWithoutToInputSchema),z.lazy(() => WorkRelationUpdateManyWithWhereWithoutToInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkRelationScalarWhereInputSchema),z.lazy(() => WorkRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkRelationUpdateManyWithoutToNestedInputSchema;
