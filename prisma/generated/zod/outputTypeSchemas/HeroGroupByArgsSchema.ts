import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroWhereInputSchema } from '../inputTypeSchemas/HeroWhereInputSchema'
import { HeroOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HeroOrderByWithAggregationInputSchema'
import { HeroScalarFieldEnumSchema } from '../inputTypeSchemas/HeroScalarFieldEnumSchema'
import { HeroScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HeroScalarWhereWithAggregatesInputSchema'

export const HeroGroupByArgsSchema: z.ZodType<Prisma.HeroGroupByArgs> = z.object({
  where: HeroWhereInputSchema.optional(),
  orderBy: z.union([ HeroOrderByWithAggregationInputSchema.array(),HeroOrderByWithAggregationInputSchema ]).optional(),
  by: HeroScalarFieldEnumSchema.array(),
  having: HeroScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HeroGroupByArgsSchema;
