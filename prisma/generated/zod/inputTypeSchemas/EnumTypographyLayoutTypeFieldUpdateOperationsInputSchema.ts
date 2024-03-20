import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypographyLayoutTypeSchema } from './TypographyLayoutTypeSchema';

export const EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTypographyLayoutTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TypographyLayoutTypeSchema).optional()
}).strict();

export default EnumTypographyLayoutTypeFieldUpdateOperationsInputSchema;
