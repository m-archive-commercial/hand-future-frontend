import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationCreateManyInputSchema } from '../inputTypeSchemas/HeroRelationCreateManyInputSchema'

export const HeroRelationCreateManyArgsSchema: z.ZodType<Prisma.HeroRelationCreateManyArgs> = z.object({
  data: z.union([ HeroRelationCreateManyInputSchema,HeroRelationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HeroRelationCreateManyArgsSchema;
