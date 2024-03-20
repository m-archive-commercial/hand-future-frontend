import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkWhereInputSchema } from '../inputTypeSchemas/WorkWhereInputSchema'
import { WorkOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkOrderByWithAggregationInputSchema'
import { WorkScalarFieldEnumSchema } from '../inputTypeSchemas/WorkScalarFieldEnumSchema'
import { WorkScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkScalarWhereWithAggregatesInputSchema'

export const WorkGroupByArgsSchema: z.ZodType<Prisma.WorkGroupByArgs> = z.object({
  where: WorkWhereInputSchema.optional(),
  orderBy: z.union([ WorkOrderByWithAggregationInputSchema.array(),WorkOrderByWithAggregationInputSchema ]).optional(),
  by: WorkScalarFieldEnumSchema.array(),
  having: WorkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkGroupByArgsSchema;
