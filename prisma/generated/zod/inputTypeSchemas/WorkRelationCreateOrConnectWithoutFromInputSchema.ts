import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationCreateWithoutFromInputSchema } from './WorkRelationCreateWithoutFromInputSchema';
import { WorkRelationUncheckedCreateWithoutFromInputSchema } from './WorkRelationUncheckedCreateWithoutFromInputSchema';

export const WorkRelationCreateOrConnectWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationCreateOrConnectWithoutFromInput> = z.object({
  where: z.lazy(() => WorkRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutFromInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutFromInputSchema) ]),
}).strict();

export default WorkRelationCreateOrConnectWithoutFromInputSchema;
