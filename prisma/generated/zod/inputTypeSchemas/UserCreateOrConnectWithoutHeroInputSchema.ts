import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutHeroInputSchema } from './UserCreateWithoutHeroInputSchema';
import { UserUncheckedCreateWithoutHeroInputSchema } from './UserUncheckedCreateWithoutHeroInputSchema';

export const UserCreateOrConnectWithoutHeroInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutHeroInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutHeroInputSchema),z.lazy(() => UserUncheckedCreateWithoutHeroInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutHeroInputSchema;
