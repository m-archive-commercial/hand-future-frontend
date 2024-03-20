import { z } from 'zod';

export const HeroRelationScalarFieldEnumSchema = z.enum(['createdAt','updatedAt','fromId','toId']);

export default HeroRelationScalarFieldEnumSchema;
