import { z } from 'zod';

export const HeroScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','name','photos','avatar','avatarOrigin','title','cities','userId']);

export default HeroScalarFieldEnumSchema;
