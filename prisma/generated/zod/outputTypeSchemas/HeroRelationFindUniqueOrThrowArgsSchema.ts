import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationIncludeSchema } from '../inputTypeSchemas/HeroRelationIncludeSchema'
import { HeroRelationWhereUniqueInputSchema } from '../inputTypeSchemas/HeroRelationWhereUniqueInputSchema'
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HeroRelationSelectSchema: z.ZodType<Prisma.HeroRelationSelect> = z.object({
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  fromId: z.boolean().optional(),
  toId: z.boolean().optional(),
  from: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
}).strict()

export const HeroRelationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HeroRelationFindUniqueOrThrowArgs> = z.object({
  select: HeroRelationSelectSchema.optional(),
  include: HeroRelationIncludeSchema.optional(),
  where: HeroRelationWhereUniqueInputSchema,
}).strict() ;

export default HeroRelationFindUniqueOrThrowArgsSchema;
