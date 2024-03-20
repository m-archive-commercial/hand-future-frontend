import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema } from './HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema';
import { HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema } from './HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema';

export const HeroRelationUpdateInputSchema: z.ZodType<Prisma.HeroRelationUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.lazy(() => HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema).optional(),
  to: z.lazy(() => HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema).optional()
}).strict();

export default HeroRelationUpdateInputSchema;
