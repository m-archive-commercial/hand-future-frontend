import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkUpdateManyMutationInputSchema'
import { WorkUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkUncheckedUpdateManyInputSchema'
import { WorkWhereInputSchema } from '../inputTypeSchemas/WorkWhereInputSchema'

export const WorkUpdateManyArgsSchema: z.ZodType<Prisma.WorkUpdateManyArgs> = z.object({
  data: z.union([ WorkUpdateManyMutationInputSchema,WorkUncheckedUpdateManyInputSchema ]),
  where: WorkWhereInputSchema.optional(),
}).strict() ;

export default WorkUpdateManyArgsSchema;
