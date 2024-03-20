import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkRelationCreateManyFromInputSchema } from './WorkRelationCreateManyFromInputSchema';

export const WorkRelationCreateManyFromInputEnvelopeSchema: z.ZodType<Prisma.WorkRelationCreateManyFromInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkRelationCreateManyFromInputSchema),z.lazy(() => WorkRelationCreateManyFromInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WorkRelationCreateManyFromInputEnvelopeSchema;
