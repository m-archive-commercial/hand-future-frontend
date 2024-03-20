import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationIncludeSchema } from '../inputTypeSchemas/WorkRelationIncludeSchema'
import { WorkRelationUpdateInputSchema } from '../inputTypeSchemas/WorkRelationUpdateInputSchema'
import { WorkRelationUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkRelationUncheckedUpdateInputSchema'
import { WorkRelationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkRelationWhereUniqueInputSchema'
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

export const WorkRelationUpdateArgsSchema: z.ZodType<Prisma.WorkRelationUpdateArgs> = z.object({
  select: WorkRelationSelectSchema.optional(),
  include: WorkRelationIncludeSchema.optional(),
  data: z.union([ WorkRelationUpdateInputSchema,WorkRelationUncheckedUpdateInputSchema ]),
  where: WorkRelationWhereUniqueInputSchema,
}).strict() ;

export default WorkRelationUpdateArgsSchema;
