import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HeroArgsSchema } from "../outputTypeSchemas/HeroArgsSchema"
import { WorkRelationFindManyArgsSchema } from "../outputTypeSchemas/WorkRelationFindManyArgsSchema"
import { WorkCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkCountOutputTypeArgsSchema"

export const WorkIncludeSchema: z.ZodType<Prisma.WorkInclude> = z.object({
  hero: z.union([z.boolean(),z.lazy(() => HeroArgsSchema)]).optional(),
  fromWorks: z.union([z.boolean(),z.lazy(() => WorkRelationFindManyArgsSchema)]).optional(),
  toWorks: z.union([z.boolean(),z.lazy(() => WorkRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default WorkIncludeSchema;
