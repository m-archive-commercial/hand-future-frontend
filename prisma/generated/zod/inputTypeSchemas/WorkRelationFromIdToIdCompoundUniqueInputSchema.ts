import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkRelationFromIdToIdCompoundUniqueInputSchema: z.ZodType<Prisma.WorkRelationFromIdToIdCompoundUniqueInput> = z.object({
  fromId: z.string(),
  toId: z.string()
}).strict();

export default WorkRelationFromIdToIdCompoundUniqueInputSchema;
