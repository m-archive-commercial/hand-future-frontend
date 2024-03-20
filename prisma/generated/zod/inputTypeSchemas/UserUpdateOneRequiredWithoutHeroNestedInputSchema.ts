import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutHeroInputSchema } from './UserCreateWithoutHeroInputSchema';
import { UserUncheckedCreateWithoutHeroInputSchema } from './UserUncheckedCreateWithoutHeroInputSchema';
import { UserCreateOrConnectWithoutHeroInputSchema } from './UserCreateOrConnectWithoutHeroInputSchema';
import { UserUpsertWithoutHeroInputSchema } from './UserUpsertWithoutHeroInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutHeroInputSchema } from './UserUpdateToOneWithWhereWithoutHeroInputSchema';
import { UserUpdateWithoutHeroInputSchema } from './UserUpdateWithoutHeroInputSchema';
import { UserUncheckedUpdateWithoutHeroInputSchema } from './UserUncheckedUpdateWithoutHeroInputSchema';

export const UserUpdateOneRequiredWithoutHeroNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutHeroNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHeroInputSchema),z.lazy(() => UserUncheckedCreateWithoutHeroInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHeroInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutHeroInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutHeroInputSchema),z.lazy(() => UserUpdateWithoutHeroInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHeroInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutHeroNestedInputSchema;
