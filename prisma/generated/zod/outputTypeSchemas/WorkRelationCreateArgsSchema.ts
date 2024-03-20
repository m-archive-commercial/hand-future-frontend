import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationIncludeSchema } from '../inputTypeSchemas/WorkRelationIncludeSchema'
import { WorkRelationCreateInputSchema } from '../inputTypeSchemas/WorkRelationCreateInputSchema'
import { WorkRelationUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkRelationUncheckedCreateInputSchema'
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

export const WorkRelationCreateArgsSchema: z.ZodType<Prisma.WorkRelationCreateArgs> = z.object({
  select: WorkRelationSelectSchema.optional(),
  include: WorkRelationIncludeSchema.optional(),
  data: z.union([ WorkRelationCreateInputSchema,WorkRelationUncheckedCreateInputSchema ]),
}).strict() ;

export default WorkRelationCreateArgsSchema;
