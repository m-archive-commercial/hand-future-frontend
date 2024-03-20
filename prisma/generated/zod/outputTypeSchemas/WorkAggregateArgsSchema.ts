import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkWhereInputSchema } from '../inputTypeSchemas/WorkWhereInputSchema'
import { WorkOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkOrderByWithRelationInputSchema'
import { WorkWhereUniqueInputSchema } from '../inputTypeSchemas/WorkWhereUniqueInputSchema'

export const WorkAggregateArgsSchema: z.ZodType<Prisma.WorkAggregateArgs> = z.object({
  where: WorkWhereInputSchema.optional(),
  orderBy: z.union([ WorkOrderByWithRelationInputSchema.array(),WorkOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkAggregateArgsSchema;
