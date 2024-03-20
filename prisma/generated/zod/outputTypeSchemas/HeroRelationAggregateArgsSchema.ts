import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationWhereInputSchema } from '../inputTypeSchemas/HeroRelationWhereInputSchema'
import { HeroRelationOrderByWithRelationInputSchema } from '../inputTypeSchemas/HeroRelationOrderByWithRelationInputSchema'
import { HeroRelationWhereUniqueInputSchema } from '../inputTypeSchemas/HeroRelationWhereUniqueInputSchema'

export const HeroRelationAggregateArgsSchema: z.ZodType<Prisma.HeroRelationAggregateArgs> = z.object({
  where: HeroRelationWhereInputSchema.optional(),
  orderBy: z.union([ HeroRelationOrderByWithRelationInputSchema.array(),HeroRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: HeroRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HeroRelationAggregateArgsSchema;
