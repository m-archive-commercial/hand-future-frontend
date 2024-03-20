import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreatephotosInputSchema } from './HeroCreatephotosInputSchema';
import { HeroRelationCreateNestedManyWithoutFromInputSchema } from './HeroRelationCreateNestedManyWithoutFromInputSchema';
import { HeroRelationCreateNestedManyWithoutToInputSchema } from './HeroRelationCreateNestedManyWithoutToInputSchema';
import { WorkCreateNestedManyWithoutHeroInputSchema } from './WorkCreateNestedManyWithoutHeroInputSchema';

export const HeroCreateWithoutUserInputSchema: z.ZodType<Prisma.HeroCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().optional().nullable(),
  photos: z.union([ z.lazy(() => HeroCreatephotosInputSchema),z.string().array() ]).optional(),
  avatar: z.string().optional().nullable(),
  avatarOrigin: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  cities: z.string().optional().nullable(),
  fromHeroes: z.lazy(() => HeroRelationCreateNestedManyWithoutFromInputSchema).optional(),
  toHeroes: z.lazy(() => HeroRelationCreateNestedManyWithoutToInputSchema).optional(),
  works: z.lazy(() => WorkCreateNestedManyWithoutHeroInputSchema).optional()
}).strict();

export default HeroCreateWithoutUserInputSchema;
