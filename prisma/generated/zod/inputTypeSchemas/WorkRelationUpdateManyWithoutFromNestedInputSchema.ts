import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationCreateWithoutFromInputSchema } from './WorkRelationCreateWithoutFromInputSchema';
import { WorkRelationUncheckedCreateWithoutFromInputSchema } from './WorkRelationUncheckedCreateWithoutFromInputSchema';
import { WorkRelationCreateOrConnectWithoutFromInputSchema } from './WorkRelationCreateOrConnectWithoutFromInputSchema';
import { WorkRelationUpsertWithWhereUniqueWithoutFromInputSchema } from './WorkRelationUpsertWithWhereUniqueWithoutFromInputSchema';
import { WorkRelationCreateManyFromInputEnvelopeSchema } from './WorkRelationCreateManyFromInputEnvelopeSchema';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationUpdateWithWhereUniqueWithoutFromInputSchema } from './WorkRelationUpdateWithWhereUniqueWithoutFromInputSchema';
import { WorkRelationUpdateManyWithWhereWithoutFromInputSchema } from './WorkRelationUpdateManyWithWhereWithoutFromInputSchema';
import { WorkRelationScalarWhereInputSchema } from './WorkRelationScalarWhereInputSchema';

export const WorkRelationUpdateManyWithoutFromNestedInputSchema: z.ZodType<Prisma.WorkRelationUpdateManyWithoutFromNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutFromInputSchema),z.lazy(() => WorkRelationCreateWithoutFromInputSchema).array(),z.lazy(() => WorkRelationUncheckedCreateWithoutFromInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkRelationCreateOrConnectWithoutFromInputSchema),z.lazy(() => WorkRelationCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkRelationUpsertWithWhereUniqueWithoutFromInputSchema),z.lazy(() => WorkRelationUpsertWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkRelationCreateManyFromInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkRelationUpdateWithWhereUniqueWithoutFromInputSchema),z.lazy(() => WorkRelationUpdateWithWhereUniqueWithoutFromInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkRelationUpdateManyWithWhereWithoutFromInputSchema),z.lazy(() => WorkRelationUpdateManyWithWhereWithoutFromInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkRelationScalarWhereInputSchema),z.lazy(() => WorkRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkRelationUpdateManyWithoutFromNestedInputSchema;
