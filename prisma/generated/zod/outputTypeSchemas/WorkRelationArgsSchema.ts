import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkRelationSelectSchema } from '../inputTypeSchemas/WorkRelationSelectSchema';
import { WorkRelationIncludeSchema } from '../inputTypeSchemas/WorkRelationIncludeSchema';

export const WorkRelationArgsSchema: z.ZodType<Prisma.WorkRelationDefaultArgs> = z.object({
  select: z.lazy(() => WorkRelationSelectSchema).optional(),
  include: z.lazy(() => WorkRelationIncludeSchema).optional(),
}).strict();

export default WorkRelationArgsSchema;
