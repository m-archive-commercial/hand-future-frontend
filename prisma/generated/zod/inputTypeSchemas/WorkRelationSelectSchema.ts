import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkArgsSchema } from "../outputTypeSchemas/WorkArgsSchema"

export const WorkRelationSelectSchema: z.ZodType<Prisma.WorkRelationSelect> = z.object({
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  fromId: z.boolean().optional(),
  toId: z.boolean().optional(),
  from: z.union([z.boolean(),z.lazy(() => WorkArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => WorkArgsSchema)]).optional(),
}).strict()

export default WorkRelationSelectSchema;
