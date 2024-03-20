import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationUpdateWithoutFromInputSchema } from './WorkRelationUpdateWithoutFromInputSchema';
import { WorkRelationUncheckedUpdateWithoutFromInputSchema } from './WorkRelationUncheckedUpdateWithoutFromInputSchema';
import { WorkRelationCreateWithoutFromInputSchema } from './WorkRelationCreateWithoutFromInputSchema';
import { WorkRelationUncheckedCreateWithoutFromInputSchema } from './WorkRelationUncheckedCreateWithoutFromInputSchema';

export const WorkRelationUpsertWithWhereUniqueWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationUpsertWithWhereUniqueWithoutFromInput> = z.object({
  where: z.lazy(() => WorkRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkRelationUpdateWithoutFromInputSchema),z.lazy(() => WorkRelationUncheckedUpdateWithoutFromInputSchema) ]),
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutFromInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutFromInputSchema) ]),
}).strict();

export default WorkRelationUpsertWithWhereUniqueWithoutFromInputSchema;
