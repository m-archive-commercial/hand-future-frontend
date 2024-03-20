import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HeroRelationFromIdToIdCompoundUniqueInputSchema: z.ZodType<Prisma.HeroRelationFromIdToIdCompoundUniqueInput> = z.object({
  fromId: z.string(),
  toId: z.string()
}).strict();

export default HeroRelationFromIdToIdCompoundUniqueInputSchema;
