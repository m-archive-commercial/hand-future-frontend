import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreatephotosInputSchema } from './HeroCreatephotosInputSchema';
import { HeroRelationUncheckedCreateNestedManyWithoutToInputSchema } from './HeroRelationUncheckedCreateNestedManyWithoutToInputSchema';
import { WorkUncheckedCreateNestedManyWithoutHeroInputSchema } from './WorkUncheckedCreateNestedManyWithoutHeroInputSchema';

export const HeroUncheckedCreateWithoutFromHeroesInputSchema: z.ZodType<Prisma.HeroUncheckedCreateWithoutFromHeroesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().optional().nullable(),
  photos: z.union([ z.lazy(() => HeroCreatephotosInputSchema),z.string().array() ]).optional(),
  avatar: z.string().optional().nullable(),
  avatarOrigin: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  cities: z.string().optional().nullable(),
  userId: z.string(),
  toHeroes: z.lazy(() => HeroRelationUncheckedCreateNestedManyWithoutToInputSchema).optional(),
  works: z.lazy(() => WorkUncheckedCreateNestedManyWithoutHeroInputSchema).optional()
}).strict();

export default HeroUncheckedCreateWithoutFromHeroesInputSchema;
