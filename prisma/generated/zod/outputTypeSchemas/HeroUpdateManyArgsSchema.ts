import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroUpdateManyMutationInputSchema } from '../inputTypeSchemas/HeroUpdateManyMutationInputSchema'
import { HeroUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HeroUncheckedUpdateManyInputSchema'
import { HeroWhereInputSchema } from '../inputTypeSchemas/HeroWhereInputSchema'

export const HeroUpdateManyArgsSchema: z.ZodType<Prisma.HeroUpdateManyArgs> = z.object({
  data: z.union([ HeroUpdateManyMutationInputSchema,HeroUncheckedUpdateManyInputSchema ]),
  where: HeroWhereInputSchema.optional(),
}).strict() ;

export default HeroUpdateManyArgsSchema;
