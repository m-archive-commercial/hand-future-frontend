import { z } from 'zod';

export const WorkRelationScalarFieldEnumSchema = z.enum(['createdAt','updatedAt','fromId','toId']);

export default WorkRelationScalarFieldEnumSchema;
