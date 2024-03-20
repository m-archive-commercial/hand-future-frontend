import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationCreateWithoutToInputSchema } from './WorkRelationCreateWithoutToInputSchema';
import { WorkRelationUncheckedCreateWithoutToInputSchema } from './WorkRelationUncheckedCreateWithoutToInputSchema';

export const WorkRelationCreateOrConnectWithoutToInputSchema: z.ZodType<Prisma.WorkRelationCreateOrConnectWithoutToInput> = z.object({
  where: z.lazy(() => WorkRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutToInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutToInputSchema) ]),
}).strict();

export default WorkRelationCreateOrConnectWithoutToInputSchema;
