import { z } from 'zod';

export const TypographyLayoutTypeSchema = z.enum(['typography_plain','typography_horizontal_bg','typography_horizontal','typography_vertical']);

export type TypographyLayoutTypeType = `${z.infer<typeof TypographyLayoutTypeSchema>}`

export default TypographyLayoutTypeSchema;
