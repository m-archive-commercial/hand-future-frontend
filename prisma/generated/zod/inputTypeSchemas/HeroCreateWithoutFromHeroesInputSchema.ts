import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreatephotosInputSchema } from './HeroCreatephotosInputSchema';
import { HeroRelationCreateNestedManyWithoutToInputSchema } from './HeroRelationCreateNestedManyWithoutToInputSchema';
import { UserCreateNestedOneWithoutHeroInputSchema } from './UserCreateNestedOneWithoutHeroInputSchema';
import { WorkCreateNestedManyWithoutHeroInputSchema } from './WorkCreateNestedManyWithoutHeroInputSchema';

export const HeroCreateWithoutFromHeroesInputSchema: z.ZodType<Prisma.HeroCreateWithoutFromHeroesInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().optional().nullable(),
  photos: z.union([ z.lazy(() => HeroCreatephotosInputSchema),z.string().array() ]).optional(),
  avatar: z.string().optional().nullable(),
  avatarOrigin: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  cities: z.string().optional().nullable(),
  toHeroes: z.lazy(() => HeroRelationCreateNestedManyWithoutToInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutHeroInputSchema),
  works: z.lazy(() => WorkCreateNestedManyWithoutHeroInputSchema).optional()
}).strict();

export default HeroCreateWithoutFromHeroesInputSchema;
