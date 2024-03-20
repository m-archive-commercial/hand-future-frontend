import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateNestedOneWithoutToHeroesInputSchema } from './HeroCreateNestedOneWithoutToHeroesInputSchema';

export const HeroRelationCreateWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationCreateWithoutFromInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  to: z.lazy(() => HeroCreateNestedOneWithoutToHeroesInputSchema)
}).strict();

export default HeroRelationCreateWithoutFromInputSchema;
