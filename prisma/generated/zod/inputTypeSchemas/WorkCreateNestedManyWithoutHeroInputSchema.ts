import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateWithoutHeroInputSchema } from './WorkCreateWithoutHeroInputSchema';
import { WorkUncheckedCreateWithoutHeroInputSchema } from './WorkUncheckedCreateWithoutHeroInputSchema';
import { WorkCreateOrConnectWithoutHeroInputSchema } from './WorkCreateOrConnectWithoutHeroInputSchema';
import { WorkCreateManyHeroInputEnvelopeSchema } from './WorkCreateManyHeroInputEnvelopeSchema';
import { WorkWhereUniqueInputSchema } from './WorkWhereUniqueInputSchema';

export const WorkCreateNestedManyWithoutHeroInputSchema: z.ZodType<Prisma.WorkCreateNestedManyWithoutHeroInput> = z.object({
  create: z.union([ z.lazy(() => WorkCreateWithoutHeroInputSchema),z.lazy(() => WorkCreateWithoutHeroInputSchema).array(),z.lazy(() => WorkUncheckedCreateWithoutHeroInputSchema),z.lazy(() => WorkUncheckedCreateWithoutHeroInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkCreateOrConnectWithoutHeroInputSchema),z.lazy(() => WorkCreateOrConnectWithoutHeroInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkCreateManyHeroInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkWhereUniqueInputSchema),z.lazy(() => WorkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkCreateNestedManyWithoutHeroInputSchema;
