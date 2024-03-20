import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { HeroUpdatephotosInputSchema } from './HeroUpdatephotosInputSchema';
import { HeroRelationUpdateManyWithoutFromNestedInputSchema } from './HeroRelationUpdateManyWithoutFromNestedInputSchema';
import { HeroRelationUpdateManyWithoutToNestedInputSchema } from './HeroRelationUpdateManyWithoutToNestedInputSchema';
import { WorkUpdateManyWithoutHeroNestedInputSchema } from './WorkUpdateManyWithoutHeroNestedInputSchema';

export const HeroUpdateWithoutUserInputSchema: z.ZodType<Prisma.HeroUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  photos: z.union([ z.lazy(() => HeroUpdatephotosInputSchema),z.string().array() ]).optional(),
  avatar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarOrigin: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cities: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fromHeroes: z.lazy(() => HeroRelationUpdateManyWithoutFromNestedInputSchema).optional(),
  toHeroes: z.lazy(() => HeroRelationUpdateManyWithoutToNestedInputSchema).optional(),
  works: z.lazy(() => WorkUpdateManyWithoutHeroNestedInputSchema).optional()
}).strict();

export default HeroUpdateWithoutUserInputSchema;
