import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateNestedOneWithoutFromHeroesInputSchema } from './HeroCreateNestedOneWithoutFromHeroesInputSchema';
import { HeroCreateNestedOneWithoutToHeroesInputSchema } from './HeroCreateNestedOneWithoutToHeroesInputSchema';

export const HeroRelationCreateInputSchema: z.ZodType<Prisma.HeroRelationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  from: z.lazy(() => HeroCreateNestedOneWithoutFromHeroesInputSchema),
  to: z.lazy(() => HeroCreateNestedOneWithoutToHeroesInputSchema)
}).strict();

export default HeroRelationCreateInputSchema;
