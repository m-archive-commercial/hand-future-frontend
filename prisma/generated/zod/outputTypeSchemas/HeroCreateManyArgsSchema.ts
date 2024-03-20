import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroCreateManyInputSchema } from '../inputTypeSchemas/HeroCreateManyInputSchema'

export const HeroCreateManyArgsSchema: z.ZodType<Prisma.HeroCreateManyArgs> = z.object({
  data: z.union([ HeroCreateManyInputSchema,HeroCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HeroCreateManyArgsSchema;
