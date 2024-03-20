import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationWhereInputSchema } from '../inputTypeSchemas/HeroRelationWhereInputSchema'
import { HeroRelationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HeroRelationOrderByWithAggregationInputSchema'
import { HeroRelationScalarFieldEnumSchema } from '../inputTypeSchemas/HeroRelationScalarFieldEnumSchema'
import { HeroRelationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HeroRelationScalarWhereWithAggregatesInputSchema'

export const HeroRelationGroupByArgsSchema: z.ZodType<Prisma.HeroRelationGroupByArgs> = z.object({
  where: HeroRelationWhereInputSchema.optional(),
  orderBy: z.union([ HeroRelationOrderByWithAggregationInputSchema.array(),HeroRelationOrderByWithAggregationInputSchema ]).optional(),
  by: HeroRelationScalarFieldEnumSchema.array(),
  having: HeroRelationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HeroRelationGroupByArgsSchema;
