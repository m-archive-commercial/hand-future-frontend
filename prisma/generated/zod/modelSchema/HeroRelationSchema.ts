import { z } from 'zod';
import type { HeroWithRelations } from './HeroSchema'
import type { HeroPartialWithRelations } from './HeroSchema'
import type { HeroOptionalDefaultsWithRelations } from './HeroSchema'
import { HeroWithRelationsSchema } from './HeroSchema'
import { HeroPartialWithRelationsSchema } from './HeroSchema'
import { HeroOptionalDefaultsWithRelationsSchema } from './HeroSchema'

/////////////////////////////////////////
// HERO RELATION SCHEMA
/////////////////////////////////////////

export const HeroRelationSchema = z.object({
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  fromId: z.string(),
  toId: z.string(),
})

export type HeroRelation = z.infer<typeof HeroRelationSchema>

/////////////////////////////////////////
// HERO RELATION PARTIAL SCHEMA
/////////////////////////////////////////

export const HeroRelationPartialSchema = HeroRelationSchema.partial()

export type HeroRelationPartial = z.infer<typeof HeroRelationPartialSchema>

/////////////////////////////////////////
// HERO RELATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HeroRelationOptionalDefaultsSchema = HeroRelationSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type HeroRelationOptionalDefaults = z.infer<typeof HeroRelationOptionalDefaultsSchema>

/////////////////////////////////////////
// HERO RELATION RELATION SCHEMA
/////////////////////////////////////////

export type HeroRelationRelations = {
  from: HeroWithRelations;
  to: HeroWithRelations;
};

export type HeroRelationWithRelations = z.infer<typeof HeroRelationSchema> & HeroRelationRelations

export const HeroRelationWithRelationsSchema: z.ZodType<HeroRelationWithRelations> = HeroRelationSchema.merge(z.object({
  from: z.lazy(() => HeroWithRelationsSchema),
  to: z.lazy(() => HeroWithRelationsSchema),
}))

/////////////////////////////////////////
// HERO RELATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type HeroRelationOptionalDefaultsRelations = {
  from: HeroOptionalDefaultsWithRelations;
  to: HeroOptionalDefaultsWithRelations;
};

export type HeroRelationOptionalDefaultsWithRelations = z.infer<typeof HeroRelationOptionalDefaultsSchema> & HeroRelationOptionalDefaultsRelations

export const HeroRelationOptionalDefaultsWithRelationsSchema: z.ZodType<HeroRelationOptionalDefaultsWithRelations> = HeroRelationOptionalDefaultsSchema.merge(z.object({
  from: z.lazy(() => HeroOptionalDefaultsWithRelationsSchema),
  to: z.lazy(() => HeroOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// HERO RELATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type HeroRelationPartialRelations = {
  from?: HeroPartialWithRelations;
  to?: HeroPartialWithRelations;
};

export type HeroRelationPartialWithRelations = z.infer<typeof HeroRelationPartialSchema> & HeroRelationPartialRelations

export const HeroRelationPartialWithRelationsSchema: z.ZodType<HeroRelationPartialWithRelations> = HeroRelationPartialSchema.merge(z.object({
  from: z.lazy(() => HeroPartialWithRelationsSchema),
  to: z.lazy(() => HeroPartialWithRelationsSchema),
})).partial()

export type HeroRelationOptionalDefaultsWithPartialRelations = z.infer<typeof HeroRelationOptionalDefaultsSchema> & HeroRelationPartialRelations

export const HeroRelationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<HeroRelationOptionalDefaultsWithPartialRelations> = HeroRelationOptionalDefaultsSchema.merge(z.object({
  from: z.lazy(() => HeroPartialWithRelationsSchema),
  to: z.lazy(() => HeroPartialWithRelationsSchema),
}).partial())

export type HeroRelationWithPartialRelations = z.infer<typeof HeroRelationSchema> & HeroRelationPartialRelations

export const HeroRelationWithPartialRelationsSchema: z.ZodType<HeroRelationWithPartialRelations> = HeroRelationSchema.merge(z.object({
  from: z.lazy(() => HeroPartialWithRelationsSchema),
  to: z.lazy(() => HeroPartialWithRelationsSchema),
}).partial())

export default HeroRelationSchema;
