import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const EnumRoleTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleTypeSchema).optional()
}).strict();

export default EnumRoleTypeFieldUpdateOperationsInputSchema;
