import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkUpdateOneRequiredWithoutToWorksNestedInputSchema } from './WorkUpdateOneRequiredWithoutToWorksNestedInputSchema';

export const WorkRelationUpdateWithoutFromInputSchema: z.ZodType<Prisma.WorkRelationUpdateWithoutFromInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  to: z.lazy(() => WorkUpdateOneRequiredWithoutToWorksNestedInputSchema).optional()
}).strict();

export default WorkRelationUpdateWithoutFromInputSchema;
