import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationCreateManyFromInputSchema } from './HeroRelationCreateManyFromInputSchema';

export const HeroRelationCreateManyFromInputEnvelopeSchema: z.ZodType<Prisma.HeroRelationCreateManyFromInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HeroRelationCreateManyFromInputSchema),z.lazy(() => HeroRelationCreateManyFromInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default HeroRelationCreateManyFromInputEnvelopeSchema;
