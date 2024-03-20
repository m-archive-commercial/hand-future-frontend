import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationCreateWithoutToInputSchema } from './WorkRelationCreateWithoutToInputSchema';
import { WorkRelationUncheckedCreateWithoutToInputSchema } from './WorkRelationUncheckedCreateWithoutToInputSchema';
import { WorkRelationCreateOrConnectWithoutToInputSchema } from './WorkRelationCreateOrConnectWithoutToInputSchema';
import { WorkRelationCreateManyToInputEnvelopeSchema } from './WorkRelationCreateManyToInputEnvelopeSchema';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';

export const WorkRelationCreateNestedManyWithoutToInputSchema: z.ZodType<Prisma.WorkRelationCreateNestedManyWithoutToInput> = z.object({
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutToInputSchema),z.lazy(() => WorkRelationCreateWithoutToInputSchema).array(),z.lazy(() => WorkRelationUncheckedCreateWithoutToInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutToInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkRelationCreateOrConnectWithoutToInputSchema),z.lazy(() => WorkRelationCreateOrConnectWithoutToInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkRelationCreateManyToInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkRelationCreateNestedManyWithoutToInputSchema;
