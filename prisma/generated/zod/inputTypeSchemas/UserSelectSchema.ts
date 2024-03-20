import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  role: z.boolean().optional(),
  email: z.boolean().optional(),
  hashedPassword: z.boolean().optional(),
  activated: z.boolean().optional(),
  activationCode: z.boolean().optional(),
  hero: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
