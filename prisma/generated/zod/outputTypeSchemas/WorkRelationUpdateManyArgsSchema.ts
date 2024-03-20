import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkRelationUpdateManyMutationInputSchema'
import { WorkRelationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkRelationUncheckedUpdateManyInputSchema'
import { WorkRelationWhereInputSchema } from '../inputTypeSchemas/WorkRelationWhereInputSchema'

export const WorkRelationUpdateManyArgsSchema: z.ZodType<Prisma.WorkRelationUpdateManyArgs> = z.object({
  data: z.union([ WorkRelationUpdateManyMutationInputSchema,WorkRelationUncheckedUpdateManyInputSchema ]),
  where: WorkRelationWhereInputSchema.optional(),
}).strict() ;

export default WorkRelationUpdateManyArgsSchema;
