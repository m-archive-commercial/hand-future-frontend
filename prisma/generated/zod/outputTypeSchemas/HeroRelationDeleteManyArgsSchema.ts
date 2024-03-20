import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationWhereInputSchema } from '../inputTypeSchemas/HeroRelationWhereInputSchema'

export const HeroRelationDeleteManyArgsSchema: z.ZodType<Prisma.HeroRelationDeleteManyArgs> = z.object({
  where: HeroRelationWhereInputSchema.optional(),
}).strict() ;

export default HeroRelationDeleteManyArgsSchema;
