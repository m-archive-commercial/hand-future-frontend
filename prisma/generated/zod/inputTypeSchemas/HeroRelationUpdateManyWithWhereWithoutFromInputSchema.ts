import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroRelationScalarWhereInputSchema } from './HeroRelationScalarWhereInputSchema';
import { HeroRelationUpdateManyMutationInputSchema } from './HeroRelationUpdateManyMutationInputSchema';
import { HeroRelationUncheckedUpdateManyWithoutFromInputSchema } from './HeroRelationUncheckedUpdateManyWithoutFromInputSchema';

export const HeroRelationUpdateManyWithWhereWithoutFromInputSchema: z.ZodType<Prisma.HeroRelationUpdateManyWithWhereWithoutFromInput> = z.object({
  where: z.lazy(() => HeroRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HeroRelationUpdateManyMutationInputSchema),z.lazy(() => HeroRelationUncheckedUpdateManyWithoutFromInputSchema) ]),
}).strict();

export default HeroRelationUpdateManyWithWhereWithoutFromInputSchema;
