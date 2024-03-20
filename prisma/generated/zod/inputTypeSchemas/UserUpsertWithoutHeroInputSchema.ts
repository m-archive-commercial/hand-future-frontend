import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutHeroInputSchema } from './UserUpdateWithoutHeroInputSchema';
import { UserUncheckedUpdateWithoutHeroInputSchema } from './UserUncheckedUpdateWithoutHeroInputSchema';
import { UserCreateWithoutHeroInputSchema } from './UserCreateWithoutHeroInputSchema';
import { UserUncheckedCreateWithoutHeroInputSchema } from './UserUncheckedCreateWithoutHeroInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutHeroInputSchema: z.ZodType<Prisma.UserUpsertWithoutHeroInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutHeroInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHeroInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutHeroInputSchema),z.lazy(() => UserUncheckedCreateWithoutHeroInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutHeroInputSchema;
