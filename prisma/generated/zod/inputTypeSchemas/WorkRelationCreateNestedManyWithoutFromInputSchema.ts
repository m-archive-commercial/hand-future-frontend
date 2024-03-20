import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationCreateWithoutFromInputSchema } from './WorkRelationCreateWithoutFromInputSchema';
import { WorkRelationUncheckedCreateWithoutFromInputSchema } from './WorkRelationUncheckedCreateWithoutFromInputSchema';
import { WorkRelationCreateOrConnectWithoutFromInputSchema } from './WorkRelationCreateOrConnectWithoutFromInputSchema';
import { WorkRelationCreateManyFromInputEnvelopeSchema } from './WorkRelationCreateManyFromInputEnvelopeSchema';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';

export const WorkRelationCreateNestedManyWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationCreateNestedManyWithoutFromInput> = z.object({
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutFromInputSchema),z.lazy(() => WorkRelationCreateWithoutFromInputSchema).array(),z.lazy(() => WorkRelationUncheckedCreateWithoutFromInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutFromInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkRelationCreateOrConnectWithoutFromInputSchema),z.lazy(() => WorkRelationCreateOrConnectWithoutFromInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkRelationCreateManyFromInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkRelationWhereUniqueInputSchema),z.lazy(() => WorkRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkRelationCreateNestedManyWithoutFromInputSchema;
