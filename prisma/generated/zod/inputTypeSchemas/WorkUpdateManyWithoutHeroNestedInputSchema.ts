import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateWithoutHeroInputSchema } from './WorkCreateWithoutHeroInputSchema';
import { WorkUncheckedCreateWithoutHeroInputSchema } from './WorkUncheckedCreateWithoutHeroInputSchema';
import { WorkCreateOrConnectWithoutHeroInputSchema } from './WorkCreateOrConnectWithoutHeroInputSchema';
import { WorkUpsertWithWhereUniqueWithoutHeroInputSchema } from './WorkUpsertWithWhereUniqueWithoutHeroInputSchema';
import { WorkCreateManyHeroInputEnvelopeSchema } from './WorkCreateManyHeroInputEnvelopeSchema';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';
import { WorkUpdateWithWhereUniqueWithoutHeroInputSchema } from './WorkUpdateWithWhereUniqueWithoutHeroInputSchema';
import { WorkUpdateManyWithWhereWithoutHeroInputSchema } from './WorkUpdateManyWithWhereWithoutHeroInputSchema';
import { WorkScalarWhereInputSchema } from './WorkScalarWhereInputSchema';

export const WorkUpdateManyWithoutHeroNestedInputSchema: z.ZodType<Prisma.WorkUpdateManyWithoutHeroNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkCreateWithoutHeroInputSchema),z.lazy(() => WorkCreateWithoutHeroInputSchema).array(),z.lazy(() => WorkUncheckedCreateWithoutHeroInputSchema),z.lazy(() => WorkUncheckedCreateWithoutHeroInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkCreateOrConnectWithoutHeroInputSchema),z.lazy(() => WorkCreateOrConnectWithoutHeroInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkUpsertWithWhereUniqueWithoutHeroInputSchema),z.lazy(() => WorkUpsertWithWhereUniqueWithoutHeroInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkCreateManyHeroInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkWhereUniqueInputSchema),z.lazy(() => WorkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkWhereUniqueInputSchema),z.lazy(() => WorkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkWhereUniqueInputSchema),z.lazy(() => WorkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkWhereUniqueInputSchema),z.lazy(() => WorkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkUpdateWithWhereUniqueWithoutHeroInputSchema),z.lazy(() => WorkUpdateWithWhereUniqueWithoutHeroInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkUpdateManyWithWhereWithoutHeroInputSchema),z.lazy(() => WorkUpdateManyWithWhereWithoutHeroInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkScalarWhereInputSchema),z.lazy(() => WorkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkUpdateManyWithoutHeroNestedInputSchema;
