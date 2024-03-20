import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema } from './WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema';
import { WorkUpdateOneRequiredWithoutToWorksNestedInputSchema } from './WorkUpdateOneRequiredWithoutToWorksNestedInputSchema';

export const WorkRelationUpdateInputSchema: z.ZodType<Prisma.WorkRelationUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.lazy(() => WorkUpdateOneRequiredWithoutFromWorksNestedInputSchema).optional(),
  to: z.lazy(() => WorkUpdateOneRequiredWithoutToWorksNestedInputSchema).optional()
}).strict();

export default WorkRelationUpdateInputSchema;
