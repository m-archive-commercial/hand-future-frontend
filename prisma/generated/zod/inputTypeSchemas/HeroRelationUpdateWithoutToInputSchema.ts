import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema } from './HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema';

export const HeroRelationUpdateWithoutToInputSchema: z.ZodType<Prisma.HeroRelationUpdateWithoutToInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.lazy(() => HeroUpdateOneRequiredWithoutFromHeroesNestedInputSchema).optional()
}).strict();

export default HeroRelationUpdateWithoutToInputSchema;
