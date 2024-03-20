import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateWithoutFromWorksInputSchema } from './WorkCreateWithoutFromWorksInputSchema';
import { WorkUncheckedCreateWithoutFromWorksInputSchema } from './WorkUncheckedCreateWithoutFromWorksInputSchema';
import { WorkCreateOrConnectWithoutFromWorksInputSchema } from './WorkCreateOrConnectWithoutFromWorksInputSchema';
import { WorkUpsertWithoutFromWorksInputSchema } from './WorkUpsertWithoutFromWorksInputSchema';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkUpdateToOneWithWhereWithoutFromWorksInputSchema } from './WorkUpdateToOneWithWhereWithoutFromWorksInputSchema';
import { WorkUpdateWithoutFromWorksInputSchema } from './WorkUpdateWithoutFromWorksInputSchema';
import { WorkUncheckedUpdateWithoutFromWorksInputSchema } from './WorkUncheckedUpdateWithoutFromWorksInputSchema';

export const WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema: z.ZodType<Prisma.WorkUpdateOneRequiredWithoutFromWorksNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkCreateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedCreateWithoutFromWorksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkCreateOrConnectWithoutFromWorksInputSchema).optional(),
  upsert: z.lazy(() => WorkUpsertWithoutFromWorksInputSchema).optional(),
  connect: z.lazy(() => WorkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkUpdateToOneWithWhereWithoutFromWorksInputSchema),z.lazy(() => WorkUpdateWithoutFromWorksInputSchema),z.lazy(() => WorkUncheckedUpdateWithoutFromWorksInputSchema) ]).optional(),
}).strict();

export default WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema;
