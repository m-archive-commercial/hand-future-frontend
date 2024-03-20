import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateNestedOneWithoutFromHeroesInputSchema } from './HeroCreateNestedOneWithoutFromHeroesInputSchema';

export const HeroRelationCreateWithoutToInputSchema: z.ZodType<Prisma.HeroRelationCreateWithoutToInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  from: z.lazy(() => HeroCreateNestedOneWithoutFromHeroesInputSchema)
}).strict();

export default HeroRelationCreateWithoutToInputSchema;
