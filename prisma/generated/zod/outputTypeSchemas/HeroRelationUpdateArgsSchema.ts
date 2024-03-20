import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationIncludeSchema } from '../inputTypeSchemas/HeroRelationIncludeSchema'
import { HeroRelationUpdateInputSchema } from '../inputTypeSchemas/HeroRelationUpdateInputSchema'
import { HeroRelationUncheckedUpdateInputSchema } from '../inputTypeSchemas/HeroRelationUncheckedUpdateInputSchema'
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

export const HeroRelationUpdateArgsSchema: z.ZodType<Prisma.HeroRelationUpdateArgs> = z.object({
  select: HeroRelationSelectSchema.optional(),
  include: HeroRelationIncludeSchema.optional(),
  data: z.union([ HeroRelationUpdateInputSchema,HeroRelationUncheckedUpdateInputSchema ]),
  where: HeroRelationWhereUniqueInputSchema,
}).strict() ;

export default HeroRelationUpdateArgsSchema;
