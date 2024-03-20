import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationUpdateWithoutFromInputSchema } from './WorkRelationUpdateWithoutFromInputSchema';
import { WorkRelationUncheckedUpdateWithoutFromInputSchema } from './WorkRelationUncheckedUpdateWithoutFromInputSchema';

export const WorkRelationUpdateWithWhereUniqueWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationUpdateWithWhereUniqueWithoutFromInput> = z.object({
  where: z.lazy(() => WorkRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkRelationUpdateWithoutFromInputSchema),z.lazy(() => WorkRelationUncheckedUpdateWithoutFromInputSchema) ]),
}).strict();

export default WorkRelationUpdateWithWhereUniqueWithoutFromInputSchema;
