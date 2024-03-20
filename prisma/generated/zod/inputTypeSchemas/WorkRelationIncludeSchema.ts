import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkArgsSchema } from "../outputTypeSchemas/WorkArgsSchema"

export const WorkRelationIncludeSchema: z.ZodType<Prisma.WorkRelationInclude> = z.object({
  from: z.union([z.boolean(),z.lazy(() => WorkArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => WorkArgsSchema)]).optional(),
}).strict()

export default WorkRelationIncludeSchema;
