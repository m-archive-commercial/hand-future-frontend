import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroRelationUpdateManyMutationInputSchema } from '../inputTypeSchemas/HeroRelationUpdateManyMutationInputSchema'
import { HeroRelationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HeroRelationUncheckedUpdateManyInputSchema'
import { HeroRelationWhereInputSchema } from '../inputTypeSchemas/HeroRelationWhereInputSchema'

export const HeroRelationUpdateManyArgsSchema: z.ZodType<Prisma.HeroRelationUpdateManyArgs> = z.object({
  data: z.union([ HeroRelationUpdateManyMutationInputSchema,HeroRelationUncheckedUpdateManyInputSchema ]),
  where: HeroRelationWhereInputSchema.optional(),
}).strict() ;

export default HeroRelationUpdateManyArgsSchema;
