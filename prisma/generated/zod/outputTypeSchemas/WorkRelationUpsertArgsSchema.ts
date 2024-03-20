import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationIncludeSchema } from '../inputTypeSchemas/WorkRelationIncludeSchema'
import { WorkRelationWhereUniqueInputSchema } from '../inputTypeSchemas/WorkRelationWhereUniqueInputSchema'
import { WorkRelationCreateInputSchema } from '../inputTypeSchemas/WorkRelationCreateInputSchema'
import { WorkRelationUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkRelationUncheckedCreateInputSchema'
import { WorkRelationUpdateInputSchema } from '../inputTypeSchemas/WorkRelationUpdateInputSchema'
import { WorkRelationUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkRelationUncheckedUpdateInputSchema'
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

export const WorkRelationUpsertArgsSchema: z.ZodType<Prisma.WorkRelationUpsertArgs> = z.object({
  select: WorkRelationSelectSchema.optional(),
  include: WorkRelationIncludeSchema.optional(),
  where: WorkRelationWhereUniqueInputSchema,
  create: z.union([ WorkRelationCreateInputSchema,WorkRelationUncheckedCreateInputSchema ]),
  update: z.union([ WorkRelationUpdateInputSchema,WorkRelationUncheckedUpdateInputSchema ]),
}).strict() ;

export default WorkRelationUpsertArgsSchema;
