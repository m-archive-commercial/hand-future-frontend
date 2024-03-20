import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationWhereInputSchema } from '../inputTypeSchemas/WorkRelationWhereInputSchema'
import { WorkRelationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkRelationOrderByWithAggregationInputSchema'
import { WorkRelationScalarFieldEnumSchema } from '../inputTypeSchemas/WorkRelationScalarFieldEnumSchema'
import { WorkRelationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkRelationScalarWhereWithAggregatesInputSchema'

export const WorkRelationGroupByArgsSchema: z.ZodType<Prisma.WorkRelationGroupByArgs> = z.object({
  where: WorkRelationWhereInputSchema.optional(),
  orderBy: z.union([ WorkRelationOrderByWithAggregationInputSchema.array(),WorkRelationOrderByWithAggregationInputSchema ]).optional(),
  by: WorkRelationScalarFieldEnumSchema.array(),
  having: WorkRelationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkRelationGroupByArgsSchema;
