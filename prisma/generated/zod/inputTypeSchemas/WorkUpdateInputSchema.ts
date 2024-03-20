import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';
import { EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema } from './EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema';
import { WorkUpdateconnectionsInputSchema } from './WorkUpdateconnectionsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { HeroUpdateOneRequiredWithoutWorksNestedInputSchema } from './HeroUpdateOneRequiredWithoutWorksNestedInputSchema';
import { WorkRelationUpdateManyWithoutFromNestedInputSchema } from './WorkRelationUpdateManyWithoutFromNestedInputSchema';
import { WorkRelationUpdateManyWithoutToNestedInputSchema } from './WorkRelationUpdateManyWithoutToNestedInputSchema';

export const WorkUpdateInputSchema: z.ZodType<Prisma.WorkUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  layout: z.union([ z.lazy(() => TypographyLayoutTypeSchema),z.lazy(() => EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  connections: z.union([ z.lazy(() => WorkUpdateconnectionsInputSchema),z.string().array() ]).optional(),
  source: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  hero: z.lazy(() => HeroUpdateOneRequiredWithoutWorksNestedInputSchema).optional(),
  fromWorks: z.lazy(() => WorkRelationUpdateManyWithoutFromNestedInputSchema).optional(),
  toWorks: z.lazy(() => WorkRelationUpdateManyWithoutToNestedInputSchema).optional()
}).strict();

export default WorkUpdateInputSchema;