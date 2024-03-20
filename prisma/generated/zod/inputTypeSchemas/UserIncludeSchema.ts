import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  hero: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
