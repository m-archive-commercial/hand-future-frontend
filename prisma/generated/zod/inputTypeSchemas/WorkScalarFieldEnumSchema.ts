import { z } from 'zod';

export const WorkScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','heroId','layout','title','cover','description','content','connections','source']);

export default WorkScalarFieldEnumSchema;
