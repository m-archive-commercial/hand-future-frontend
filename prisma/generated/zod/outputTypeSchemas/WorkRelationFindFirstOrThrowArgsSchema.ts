import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationIncludeSchema } from '../inputTypeSchemas/WorkRelationIncludeSchema'
import { WorkRelationWhereInputSchema } from '../inputTypeSchemas/WorkRelationWhereInputSchema'
import { WorkRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkRelationOrderByWithRelationInputSchema'
import { WorkRelationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkRelationWhereUniqueInputSchema'
import { WorkRelationScalarFieldEnumSchema } from '../inputTypeSchemas/WorkRelationScalarFieldEnumSchema'
import { WorkArgsSchema } from "../outputTypeSchemas/WorkArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkRelationSelectSchema: z.ZodType<Prisma.WorkRelationSelect> = z.object({
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  fromId: z.boolean().optional(),
  toId: z.boolean().optional(),
  from: z.union([z.boolean(),z.lazy(() => WorkArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => WorkArgsSchema)]).optional(),
}).strict()

export const WorkRelationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WorkRelationFindFirstOrThrowArgs> = z.object({
  select: WorkRelationSelectSchema.optional(),
  include: WorkRelationIncludeSchema.optional(),
  where: WorkRelationWhereInputSchema.optional(),
  orderBy: z.union([ WorkRelationOrderByWithRelationInputSchema.array(),WorkRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkRelationScalarFieldEnumSchema,WorkRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WorkRelationFindFirstOrThrowArgsSchema;
