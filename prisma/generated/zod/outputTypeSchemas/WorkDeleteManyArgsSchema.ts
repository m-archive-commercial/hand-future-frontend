import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkWhereInputSchema } from '../inputTypeSchemas/WorkWhereInputSchema'

export const WorkDeleteManyArgsSchema: z.ZodType<Prisma.WorkDeleteManyArgs> = z.object({
  where: WorkWhereInputSchema.optional(),
}).strict() ;

export default WorkDeleteManyArgsSchema;
