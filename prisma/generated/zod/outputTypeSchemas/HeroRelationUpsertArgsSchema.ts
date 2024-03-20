import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationIncludeSchema } from '../inputTypeSchemas/HeroRelationIncludeSchema'
import { HeroRelationWhereUniqueInputSchema } from '../inputTypeSchemas/HeroRelationWhereUniqueInputSchema'
import { HeroRelationCreateInputSchema } from '../inputTypeSchemas/HeroRelationCreateInputSchema'
import { HeroRelationUncheckedCreateInputSchema } from '../inputTypeSchemas/HeroRelationUncheckedCreateInputSchema'
import { HeroRelationUpdateInputSchema } from '../inputTypeSchemas/HeroRelationUpdateInputSchema'
import { HeroRelationUncheckedUpdateInputSchema } from '../inputTypeSchemas/HeroRelationUncheckedUpdateInputSchema'
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

export const HeroRelationUpsertArgsSchema: z.ZodType<Prisma.HeroRelationUpsertArgs> = z.object({
  select: HeroRelationSelectSchema.optional(),
  include: HeroRelationIncludeSchema.optional(),
  where: HeroRelationWhereUniqueInputSchema,
  create: z.union([ HeroRelationCreateInputSchema,HeroRelationUncheckedCreateInputSchema ]),
  update: z.union([ HeroRelationUpdateInputSchema,HeroRelationUncheckedUpdateInputSchema ]),
}).strict() ;

export default HeroRelationUpsertArgsSchema;
