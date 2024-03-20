import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutHeroInputSchema } from './UserUpdateWithoutHeroInputSchema';
import { UserUncheckedUpdateWithoutHeroInputSchema } from './UserUncheckedUpdateWithoutHeroInputSchema';

export const UserUpdateToOneWithWhereWithoutHeroInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutHeroInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutHeroInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHeroInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutHeroInputSchema;
