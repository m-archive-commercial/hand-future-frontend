import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkCreateManyInputSchema } from '../inputTypeSchemas/WorkCreateManyInputSchema'

export const WorkCreateManyArgsSchema: z.ZodType<Prisma.WorkCreateManyArgs> = z.object({
  data: z.union([ WorkCreateManyInputSchema,WorkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WorkCreateManyArgsSchema;
