import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkIncludeSchema } from '../inputTypeSchemas/WorkIncludeSchema'
import { WorkWhereInputSchema } from '../inputTypeSchemas/WorkWhereInputSchema'
import { WorkOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkOrderByWithRelationInputSchema'
import { WorkWhereUniqueInputSchema } from '../inputTypeSchemas/WorkWhereUniqueInputSchema'
import { WorkScalarFieldEnumSchema } from '../inputTypeSchemas/WorkScalarFieldEnumSchema'
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"
import { WorkRelationFindManyArgsSchema } from "../outputTypeSchemas/WorkRelationFindManyArgsSchema"
import { WorkCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkSelectSchema: z.ZodType<Prisma.WorkSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  heroId: z.boolean().optional(),
  layout: z.boolean().optional(),
  title: z.boolean().optional(),
  cover: z.boolean().optional(),
  description: z.boolean().optional(),
  content: z.boolean().optional(),
  connections: z.boolean().optional(),
  source: z.boolean().optional(),
  hero: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
  fromWorks: z.union([z.boolean(),z.lazy(() => WorkRelationFindManyArgsSchema)]).optional(),
  toWorks: z.union([z.boolean(),z.lazy(() => WorkRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WorkFindManyArgsSchema: z.ZodType<Prisma.WorkFindManyArgs> = z.object({
  select: WorkSelectSchema.optional(),
  include: WorkIncludeSchema.optional(),
  where: WorkWhereInputSchema.optional(),
  orderBy: z.union([ WorkOrderByWithRelationInputSchema.array(),WorkOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkScalarFieldEnumSchema,WorkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WorkFindManyArgsSchema;
