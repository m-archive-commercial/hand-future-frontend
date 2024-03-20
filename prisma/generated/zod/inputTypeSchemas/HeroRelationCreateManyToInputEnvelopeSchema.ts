import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationCreateManyToInputSchema } from './HeroRelationCreateManyToInputSchema';

export const HeroRelationCreateManyToInputEnvelopeSchema: z.ZodType<Prisma.HeroRelationCreateManyToInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HeroRelationCreateManyToInputSchema),z.lazy(() => HeroRelationCreateManyToInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default HeroRelationCreateManyToInputEnvelopeSchema;
