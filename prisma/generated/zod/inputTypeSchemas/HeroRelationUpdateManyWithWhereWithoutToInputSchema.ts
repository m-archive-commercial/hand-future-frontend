import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationScalarWhereInputSchema } from './HeroRelationScalarWhereInputSchema';
import { HeroRelationUpdateManyMutationInputSchema } from './HeroRelationUpdateManyMutationInputSchema';
import { HeroRelationUncheckedUpdateManyWithoutToInputSchema } from './HeroRelationUncheckedUpdateManyWithoutToInputSchema';

export const HeroRelationUpdateManyWithWhereWithoutToInputSchema: z.ZodType<Prisma.HeroRelationUpdateManyWithWhereWithoutToInput> = z.object({
  where: z.lazy(() => HeroRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HeroRelationUpdateManyMutationInputSchema),z.lazy(() => HeroRelationUncheckedUpdateManyWithoutToInputSchema) ]),
}).strict();

export default HeroRelationUpdateManyWithWhereWithoutToInputSchema;
