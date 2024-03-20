import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutHeroInputSchema } from './UserCreateWithoutHeroInputSchema';
import { UserUncheckedCreateWithoutHeroInputSchema } from './UserUncheckedCreateWithoutHeroInputSchema';
import { UserCreateOrConnectWithoutHeroInputSchema } from './UserCreateOrConnectWithoutHeroInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutHeroInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutHeroInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHeroInputSchema),z.lazy(() => UserUncheckedCreateWithoutHeroInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHeroInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutHeroInputSchema;
