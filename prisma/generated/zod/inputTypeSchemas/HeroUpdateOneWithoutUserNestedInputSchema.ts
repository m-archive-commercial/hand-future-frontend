import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HeroCreateWithoutUserInputSchema } from './HeroCreateWithoutUserInputSchema';
import { HeroUncheckedCreateWithoutUserInputSchema } from './HeroUncheckedCreateWithoutUserInputSchema';
import { HeroCreateOrConnectWithoutUserInputSchema } from './HeroCreateOrConnectWithoutUserInputSchema';
import { HeroUpsertWithoutUserInputSchema } from './HeroUpsertWithoutUserInputSchema';
import { HeroWhereInputSchema } from './HeroWhereInputSchema';
import { HeroWhereUniqueInputSchema } from './HeroWhereUniqueInputSchema';
import { HeroUpdateToOneWithWhereWithoutUserInputSchema } from './HeroUpdateToOneWithWhereWithoutUserInputSchema';
import { HeroUpdateWithoutUserInputSchema } from './HeroUpdateWithoutUserInputSchema';
import { HeroUncheckedUpdateWithoutUserInputSchema } from './HeroUncheckedUpdateWithoutUserInputSchema';

export const HeroUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.HeroUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HeroCreateWithoutUserInputSchema),z.lazy(() => HeroUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HeroCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => HeroUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HeroWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HeroWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HeroWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HeroUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => HeroUpdateWithoutUserInputSchema),z.lazy(() => HeroUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default HeroUpdateOneWithoutUserNestedInputSchema;
