import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationWhereInputSchema } from '../inputTypeSchemas/WorkRelationWhereInputSchema'
import { WorkRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkRelationOrderByWithRelationInputSchema'
import { WorkRelationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkRelationWhereUniqueInputSchema'

export const WorkRelationAggregateArgsSchema: z.ZodType<Prisma.WorkRelationAggregateArgs> = z.object({
  where: WorkRelationWhereInputSchema.optional(),
  orderBy: z.union([ WorkRelationOrderByWithRelationInputSchema.array(),WorkRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkRelationAggregateArgsSchema;
