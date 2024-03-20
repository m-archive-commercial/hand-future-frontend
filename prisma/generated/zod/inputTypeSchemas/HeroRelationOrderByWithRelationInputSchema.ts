import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HeroOrderByWithRelationInputSchema } from './HeroOrderByWithRelationInputSchema';

export const HeroRelationOrderByWithRelationInputSchema: z.ZodType<Prisma.HeroRelationOrderByWithRelationInput> = z.object({
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  fromId: z.lazy(() => SortOrderSchema).optional(),
  toId: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => HeroOrderByWithRelationInputSchema).optional(),
  to: z.lazy(() => HeroOrderByWithRelationInputSchema).optional()
}).strict();

export default HeroRelationOrderByWithRelationInputSchema;
