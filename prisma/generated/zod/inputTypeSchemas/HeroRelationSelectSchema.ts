import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"

export const HeroRelationSelectSchema: z.ZodType<Prisma.HeroRelationSelect> = z.object({
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  fromId: z.boolean().optional(),
  toId: z.boolean().optional(),
  from: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
  to: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
}).strict()

export default HeroRelationSelectSchema;
