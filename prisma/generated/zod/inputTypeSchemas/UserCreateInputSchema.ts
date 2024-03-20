import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTypeSchema } from './RoleTypeSchema';
import { HeroCreateNestedOneWithoutUserInputSchema } from './HeroCreateNestedOneWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleTypeSchema).optional(),
  email: z.string().optional().nullable(),
  hashedPassword: z.string().optional().nullable(),
  activated: z.boolean().optional(),
  activationCode: z.string().optional().nullable(),
  hero: z.lazy(() => HeroCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
