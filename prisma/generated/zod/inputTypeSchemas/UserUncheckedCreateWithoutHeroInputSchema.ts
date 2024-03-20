import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';

export const UserUncheckedCreateWithoutHeroInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutHeroInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleTypeSchema).optional(),
  email: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  activated: z.boolean().optional(),
  activationCode: z.string().optional().nullable()
}).strict();

export default UserUncheckedCreateWithoutHeroInputSchema;
