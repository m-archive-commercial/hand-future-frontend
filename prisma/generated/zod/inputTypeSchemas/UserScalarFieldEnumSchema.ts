import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','role','email','hashedPassword','activated','activationCode']);

export default UserScalarFieldEnumSchema;
