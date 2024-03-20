import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema } from './HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema';

export const HeroRelationUpdateWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationUpdateWithoutFromInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  to: z.lazy(() => HeroUpdateOneRequiredWithoutToHeroesNestedInputSchema).optional()
}).strict();

export default HeroRelationUpdateWithoutFromInputSchema;
