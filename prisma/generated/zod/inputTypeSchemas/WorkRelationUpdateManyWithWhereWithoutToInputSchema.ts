import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationScalarWhereInputSchema } from './WorkRelationScalarWhereInputSchema';
import { WorkRelationUpdateManyMutationInputSchema } from './WorkRelationUpdateManyMutationInputSchema';
import { WorkRelationUncheckedUpdateManyWithoutToInputSchema } from './WorkRelationUncheckedUpdateManyWithoutToInputSchema';

export const WorkRelationUpdateManyWithWhereWithoutToInputSchema: z.ZodType<Prisma.WorkRelationUpdateManyWithWhereWithoutToInput> = z.object({
  where: z.lazy(() => WorkRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkRelationUpdateManyMutationInputSchema),z.lazy(() => WorkRelationUncheckedUpdateManyWithoutToInputSchema) ]),
}).strict();

export default WorkRelationUpdateManyWithWhereWithoutToInputSchema;
