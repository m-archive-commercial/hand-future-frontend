import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationIncludeSchema } from '../inputTypeSchemas/HeroRelationIncludeSchema'
import { HeroRelationWhereInputSchema } from '../inputTypeSchemas/HeroRelationWhereInputSchema'
import { HeroRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/HeroRelationOrderByWithRelationInputSchema'
import { HeroRelationWhereUniqueInputSchema } from '../inputTypeSchemas/HeroRelationWhereUniqueInputSchema'
import { HeroRelationScalarFieldEnumSchema } from '../inputTypeSchemas/HeroRelationScalarFieldEnumSchema'
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

export const HeroRelationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HeroRelationFindFirstOrThrowArgs> = z.object({
  select: HeroRelationSelectSchema.optional(),
  include: HeroRelationIncludeSchema.optional(),
  where: HeroRelationWhereInputSchema.optional(),
  orderBy: z.union([ HeroRelationOrderByWithRelationInputSchema.array(),HeroRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: HeroRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HeroRelationScalarFieldEnumSchema,HeroRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default HeroRelationFindFirstOrThrowArgsSchema;
