import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroWhereInputSchema } from '../inputTypeSchemas/HeroWhereInputSchema'
import { HeroOrderByWithRelationInputSchema } from '../inputTypeSchemas/HeroOrderByWithRelationInputSchema'
import { HeroWhereUniqueInputSchema } from '../inputTypeSchemas/HeroWhereUniqueInputSchema'

export const HeroAggregateArgsSchema: z.ZodType<Prisma.HeroAggregateArgs> = z.object({
  where: HeroWhereInputSchema.optional(),
  orderBy: z.union([ HeroOrderByWithRelationInputSchema.array(),HeroOrderByWithRelationInputSchema ]).optional(),
  cursor: HeroWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HeroAggregateArgsSchema;
