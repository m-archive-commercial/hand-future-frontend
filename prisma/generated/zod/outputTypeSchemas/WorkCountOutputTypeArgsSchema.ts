import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkCountOutputTypeSelectSchema } from './WorkCountOutputTypeSelectSchema';

export const WorkCountOutputTypeArgsSchema: z.ZodType<Prisma.WorkCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WorkCountOutputTypeSelectSchema).nullish(),
}).strict();

export default WorkCountOutputTypeSelectSchema;
