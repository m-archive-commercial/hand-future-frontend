import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationWhereUniqueInputSchema } from './WorkRelationWhereUniqueInputSchema';
import { WorkRelationUpdateWithoutToInputSchema } from './WorkRelationUpdateWithoutToInputSchema';
import { WorkRelationUncheckedUpdateWithoutToInputSchema } from './WorkRelationUncheckedUpdateWithoutToInputSchema';
import { WorkRelationCreateWithoutToInputSchema } from './WorkRelationCreateWithoutToInputSchema';
import { WorkRelationUncheckedCreateWithoutToInputSchema } from './WorkRelationUncheckedCreateWithoutToInputSchema';

export const WorkRelationUpsertWithWhereUniqueWithoutToInputSchema: z.ZodType<Prisma.WorkRelationUpsertWithWhereUniqueWithoutToInput> = z.object({
  where: z.lazy(() => WorkRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkRelationUpdateWithoutToInputSchema),z.lazy(() => WorkRelationUncheckedUpdateWithoutToInputSchema) ]),
  create: z.union([ z.lazy(() => WorkRelationCreateWithoutToInputSchema),z.lazy(() => WorkRelationUncheckedCreateWithoutToInputSchema) ]),
}).strict();

export default WorkRelationUpsertWithWhereUniqueWithoutToInputSchema;
