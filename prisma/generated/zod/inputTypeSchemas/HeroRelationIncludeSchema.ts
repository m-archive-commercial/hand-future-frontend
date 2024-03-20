import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"

export const HeroRelationIncludeSchema: z.ZodType<Prisma.HeroRelationInclude> = z.object({
  from: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
}).strict()

export default HeroRelationIncludeSchema;
