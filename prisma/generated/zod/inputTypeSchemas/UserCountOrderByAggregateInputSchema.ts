import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  hashedPassword: z.lazy(() => SortOrderSchema).optional(),
  activated: z.lazy(() => SortOrderSchema).optional(),
  activationCode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserCountOrderByAggregateInputSchema;
