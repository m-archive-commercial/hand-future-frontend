import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkCreateconnectionsInputSchema: z.ZodType<Prisma.WorkCreateconnectionsInput> = z.object({
  set: z.string().array()
}).strict();

export default WorkCreateconnectionsInputSchema;
