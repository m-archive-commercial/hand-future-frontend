import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkCreateManyHeroInputSchema } from './WorkCreateManyHeroInputSchema';

export const WorkCreateManyHeroInputEnvelopeSchema: z.ZodType<Prisma.WorkCreateManyHeroInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkCreateManyHeroInputSchema),z.lazy(() => WorkCreateManyHeroInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WorkCreateManyHeroInputEnvelopeSchema;
