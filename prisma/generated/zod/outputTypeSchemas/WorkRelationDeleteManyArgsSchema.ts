import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationWhereInputSchema } from '../inputTypeSchemas/WorkRelationWhereInputSchema'

export const WorkRelationDeleteManyArgsSchema: z.ZodType<Prisma.WorkRelationDeleteManyArgs> = z.object({
  where: WorkRelationWhereInputSchema.optional(),
}).strict() ;

export default WorkRelationDeleteManyArgsSchema;
