import { z } from 'zod';
import type { HeroRelationWithRelations } from './HeroRelationSchema'
import type { HeroRelationPartialWithRelations } from './HeroRelationSchema'
import type { HeroRelationOptionalDefaultsWithRelations } from './HeroRelationSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { WorkWithRelations } from './WorkSchema'
import type { WorkPartialWithRelations } from './WorkSchema'
import type { WorkOptionalDefaultsWithRelations } from './WorkSchema'
import { HeroRelationWithRelationsSchema } from './HeroRelationSchema'
import { HeroRelationPartialWithRelationsSchema } from './HeroRelationSchema'
import { HeroRelationOptionalDefaultsWithRelationsSchema } from './HeroRelationSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { WorkWithRelationsSchema } from './WorkSchema'
import { WorkPartialWithRelationsSchema } from './WorkSchema'
import { WorkOptionalDefaultsWithRelationsSchema } from './WorkSchema'

/////////////////////////////////////////
// HERO SCHEMA
/////////////////////////////////////////

export const HeroSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string().nullish(),
  photos: z.string().array(),
  avatar: z.string().nullish(),
  avatarOrigin: z.string().nullish(),
  title: z.string().nullish(),
  cities: z.string().nullish(),
  userId: z.string(),
})

export type Hero = z.infer<typeof HeroSchema>

/////////////////////////////////////////
// HERO PARTIAL SCHEMA
/////////////////////////////////////////

export const HeroPartialSchema = HeroSchema.partial()

export type HeroPartial = z.infer<typeof HeroPartialSchema>

/////////////////////////////////////////
// HERO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const HeroOptionalDefaultsSchema = HeroSchema.merge(z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type HeroOptionalDefaults = z.infer<typeof HeroOptionalDefaultsSchema>

/////////////////////////////////////////
// HERO RELATION SCHEMA
/////////////////////////////////////////

export type HeroRelations = {
  fromHeroes: HeroRelationWithRelations[];
  toHeroes: HeroRelationWithRelations[];
  user: UserWithRelations;
  works: WorkWithRelations[];
};

export type HeroWithRelations = z.infer<typeof HeroSchema> & HeroRelations

export const HeroWithRelationsSchema: z.ZodType<HeroWithRelations> = HeroSchema.merge(z.object({
  fromHeroes: z.lazy(() => HeroRelationWithRelationsSchema).array(),
  toHeroes: z.lazy(() => HeroRelationWithRelationsSchema).array(),
  user: z.lazy(() => UserWithRelationsSchema),
  works: z.lazy(() => WorkWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// HERO OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type HeroOptionalDefaultsRelations = {
  fromHeroes: HeroRelationOptionalDefaultsWithRelations[];
  toHeroes: HeroRelationOptionalDefaultsWithRelations[];
  user: UserOptionalDefaultsWithRelations;
  works: WorkOptionalDefaultsWithRelations[];
};

export type HeroOptionalDefaultsWithRelations = z.infer<typeof HeroOptionalDefaultsSchema> & HeroOptionalDefaultsRelations

export const HeroOptionalDefaultsWithRelationsSchema: z.ZodType<HeroOptionalDefaultsWithRelations> = HeroOptionalDefaultsSchema.merge(z.object({
  fromHeroes: z.lazy(() => HeroRelationOptionalDefaultsWithRelationsSchema).array(),
  toHeroes: z.lazy(() => HeroRelationOptionalDefaultsWithRelationsSchema).array(),
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  works: z.lazy(() => WorkOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// HERO PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type HeroPartialRelations = {
  fromHeroes?: HeroRelationPartialWithRelations[];
  toHeroes?: HeroRelationPartialWithRelations[];
  user?: UserPartialWithRelations;
  works?: WorkPartialWithRelations[];
};

export type HeroPartialWithRelations = z.infer<typeof HeroPartialSchema> & HeroPartialRelations

export const HeroPartialWithRelationsSchema: z.ZodType<HeroPartialWithRelations> = HeroPartialSchema.merge(z.object({
  fromHeroes: z.lazy(() => HeroRelationPartialWithRelationsSchema).array(),
  toHeroes: z.lazy(() => HeroRelationPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  works: z.lazy(() => WorkPartialWithRelationsSchema).array(),
})).partial()

export type HeroOptionalDefaultsWithPartialRelations = z.infer<typeof HeroOptionalDefaultsSchema> & HeroPartialRelations

export const HeroOptionalDefaultsWithPartialRelationsSchema: z.ZodType<HeroOptionalDefaultsWithPartialRelations> = HeroOptionalDefaultsSchema.merge(z.object({
  fromHeroes: z.lazy(() => HeroRelationPartialWithRelationsSchema).array(),
  toHeroes: z.lazy(() => HeroRelationPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  works: z.lazy(() => WorkPartialWithRelationsSchema).array(),
}).partial())

export type HeroWithPartialRelations = z.infer<typeof HeroSchema> & HeroPartialRelations

export const HeroWithPartialRelationsSchema: z.ZodType<HeroWithPartialRelations> = HeroSchema.merge(z.object({
  fromHeroes: z.lazy(() => HeroRelationPartialWithRelationsSchema).array(),
  toHeroes: z.lazy(() => HeroRelationPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  works: z.lazy(() => WorkPartialWithRelationsSchema).array(),
}).partial())

export default HeroSchema;
