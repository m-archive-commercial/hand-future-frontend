import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationUpdateWithoutToInputSchema } from './WorkRelationUpdateWithoutToInputSchema';
import { WorkRelationUncheckedUpdateWithoutToInputSchema } from './WorkRelationUncheckedUpdateWithoutToInputSchema';

export const WorkRelationUpdateWithWhereUniqueWithoutToInputSchema: z.ZodType<Prisma.WorkRelationUpdateWithWhereUniqueWithoutToInput> = z.object({
  where: z.lazy(() => WorkRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkRelationUpdateWithoutToInputSchema),z.lazy(() => WorkRelationUncheckedUpdateWithoutToInputSchema) ]),
}).strict();

export default WorkRelationUpdateWithWhereUniqueWithoutToInputSchema;
