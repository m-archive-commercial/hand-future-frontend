import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationCreateManyToInputSchema } from './WorkRelationCreateManyToInputSchema';

export const WorkRelationCreateManyToInputEnvelopeSchema: z.ZodType<Prisma.WorkRelationCreateManyToInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkRelationCreateManyToInputSchema),z.lazy(() => WorkRelationCreateManyToInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WorkRelationCreateManyToInputEnvelopeSchema;
