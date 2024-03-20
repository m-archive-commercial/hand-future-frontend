import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSelectSchema } from '../inputTypeSchemas/WorkSelectSchema';
import { WorkIncludeSchema } from '../inputTypeSchemas/WorkIncludeSchema';

export const WorkArgsSchema: z.ZodType<Prisma.WorkDefaultArgs> = z.object({
  select: z.lazy(() => WorkSelectSchema).optional(),
  include: z.lazy(() => WorkIncludeSchema).optional(),
}).strict();

export default WorkArgsSchema;
