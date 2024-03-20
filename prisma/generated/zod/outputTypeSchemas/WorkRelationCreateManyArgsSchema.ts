import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationCreateManyInputSchema } from '../inputTypeSchemas/WorkRelationCreateManyInputSchema'

export const WorkRelationCreateManyArgsSchema: z.ZodType<Prisma.WorkRelationCreateManyArgs> = z.object({
  data: z.union([ WorkRelationCreateManyInputSchema,WorkRelationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WorkRelationCreateManyArgsSchema;
