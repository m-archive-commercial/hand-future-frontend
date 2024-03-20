import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateWithoutToWorksInputSchema } from './WorkCreateWithoutToWorksInputSchema';
import { WorkUncheckedCreateWithoutToWorksInputSchema } from './WorkUncheckedCreateWithoutToWorksInputSchema';
import { WorkCreateOrConnectWithoutToWorksInputSchema } from './WorkCreateOrConnectWithoutToWorksInputSchema';
import { WorkUpsertWithoutToWorksInputSchema } from './WorkUpsertWithoutToWorksInputSchema';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkUpdateToOneWithWhereWithoutToWorksInputSchema } from './WorkUpdateToOneWithWhereWithoutToWorksInputSchema';
import { WorkUpdateWithoutToWorksInputSchema } from './WorkUpdateWithoutToWorksInputSchema';
import { WorkUncheckedUpdateWithoutToWorksInputSchema } from './WorkUncheckedUpdateWithoutToWorksInputSchema';

export const WorkUpdateOneRequiredWithoutToWorksNestedInputSchema: z.ZodType<Prisma.WorkUpdateOneRequiredWithoutToWorksNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkCreateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutToWorksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkCreateOrConnectWithoutToWorksInputSchema).optional(),
  upsert: z.lazy(() => WorkUpsertWithoutToWorksInputSchema).optional(),
  connect: z.lazy(() => WorkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkUpdateToOneWithWhereWithoutToWorksInputSchema),z.lazy(() => WorkUpdateWithoutToWorksInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutToWorksInputSchema) ]).optional(),
}).strict();

export default WorkUpdateOneRequiredWithoutToWorksNestedInputSchema;
