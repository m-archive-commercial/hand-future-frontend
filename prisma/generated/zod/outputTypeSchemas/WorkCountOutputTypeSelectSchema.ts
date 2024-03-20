import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WorkCountOutputTypeSelectSchema: z.ZodType<Prisma.WorkCountOutputTypeSelect> = z.object({
  fromWorks: z.boolean().optional(),
  toWorks: z.boolean().optional(),
}).strict();

export default WorkCountOutputTypeSelectSchema;
