import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema } from './WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema';

export const WorkRelationUpdateWithoutToInputSchema: z.ZodType<Prisma.WorkRelationUpdateWithoutToInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.lazy(() => WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema).optional()
}).strict();

export default WorkRelationUpdateWithoutToInputSchema;
