import { z } from 'zod';

export const RoleTypeSchema = z.enum(['user','admin']);

export type RoleTypeType = `${z.infer<typeof RoleTypeSchema>}`

export default RoleTypeSchema;
