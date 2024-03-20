import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroWhereInputSchema } from '../inputTypeSchemas/HeroWhereInputSchema'

export const HeroDeleteManyArgsSchema: z.ZodType<Prisma.HeroDeleteManyArgs> = z.object({
  where: HeroWhereInputSchema.optional(),
}).strict() ;

export default HeroDeleteManyArgsSchema;
