import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationScalarWhereInputSchema } from './WorkRelationScalarWhereInputSchema';
import { WorkRelationUpdateManyMutationInputSchema } from './WorkRelationUpdateManyMutationInputSchema';
import { WorkRelationUncheckedUpdateManyWithoutFromInputSchema } from './WorkRelationUncheckedUpdateManyWithoutFromInputSchema';

export const WorkRelationUpdateManyWithWhereWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationUpdateManyWithWhereWithoutFromInput> = z.object({
  where: z.lazy(() => WorkRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkRelationUpdateManyMutationInputSchema),z.lazy(() => WorkRelationUncheckedUpdateManyWithoutFromInputSchema) ]),
}).strict();

export default WorkRelationUpdateManyWithWhereWithoutFromInputSchema;
