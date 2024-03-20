import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { TypographyLayoutTypeSchema } from '../inputTypeSchemas/TypographyLayoutTypeSchema'
import type { HeroWithRelations } from './HeroSchema'
import type { HeroPartialWithRelations } from './HeroSchema'
import type { HeroOptionalDefaultsWithRelations } from './HeroSchema'
import type { WorkRelationWithRelations } from './WorkRelationSchema'
import type { WorkRelationPartialWithRelations } from './WorkRelationSchema'
import type { WorkRelationOptionalDefaultsWithRelations } from './WorkRelationSchema'
import { HeroWithRelationsSchema } from './HeroSchema'
import { HeroPartialWithRelationsSchema } from './HeroSchema'
import { HeroOptionalDefaultsWithRelationsSchema } from './HeroSchema'
import { WorkRelationWithRelationsSchema } from './WorkRelationSchema'
import { WorkRelationPartialWithRelationsSchema } from './WorkRelationSchema'
import { WorkRelationOptionalDefaultsWithRelationsSchema } from './WorkRelationSchema'

/////////////////////////////////////////
// WORK SCHEMA
/////////////////////////////////////////

export const WorkSchema = z.object({
  layout: TypographyLayoutTypeSchema,
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  heroId: z.string(),
  title: z.string(),
  cover: z.string(),
  description: z.string(),
  content: z.string(),
  connections: z.string().array(),
  /**
   * [WorkModel]
   */
  source: JsonValueSchema.nullable(),
})

export type Work = z.infer<typeof WorkSchema>

/////////////////////////////////////////
// WORK PARTIAL SCHEMA
/////////////////////////////////////////

export const WorkPartialSchema = WorkSchema.partial()

export type WorkPartial = z.infer<typeof WorkPartialSchema>

/////////////////////////////////////////
// WORK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WorkOptionalDefaultsSchema = WorkSchema.merge(z.object({
  layout: TypographyLayoutTypeSchema.optional(),
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type WorkOptionalDefaults = z.infer<typeof WorkOptionalDefaultsSchema>

/////////////////////////////////////////
// WORK RELATION SCHEMA
/////////////////////////////////////////

export type WorkRelations = {
  hero: HeroWithRelations;
  fromWorks: WorkRelationWithRelations[];
  toWorks: WorkRelationWithRelations[];
};

export type WorkWithRelations = z.infer<typeof WorkSchema> & WorkRelations

export const WorkWithRelationsSchema: z.ZodType<WorkWithRelations> = WorkSchema.merge(z.object({
  hero: z.lazy(() => HeroWithRelationsSchema),
  fromWorks: z.lazy(() => WorkRelationWithRelationsSchema).array(),
  toWorks: z.lazy(() => WorkRelationWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// WORK OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type WorkOptionalDefaultsRelations = {
  hero: HeroOptionalDefaultsWithRelations;
  fromWorks: WorkRelationOptionalDefaultsWithRelations[];
  toWorks: WorkRelationOptionalDefaultsWithRelations[];
};

export type WorkOptionalDefaultsWithRelations = z.infer<typeof WorkOptionalDefaultsSchema> & WorkOptionalDefaultsRelations

export const WorkOptionalDefaultsWithRelationsSchema: z.ZodType<WorkOptionalDefaultsWithRelations> = WorkOptionalDefaultsSchema.merge(z.object({
  hero: z.lazy(() => HeroOptionalDefaultsWithRelationsSchema),
  fromWorks: z.lazy(() => WorkRelationOptionalDefaultsWithRelationsSchema).array(),
  toWorks: z.lazy(() => WorkRelationOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// WORK PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type WorkPartialRelations = {
  hero?: HeroPartialWithRelations;
  fromWorks?: WorkRelationPartialWithRelations[];
  toWorks?: WorkRelationPartialWithRelations[];
};

export type WorkPartialWithRelations = z.infer<typeof WorkPartialSchema> & WorkPartialRelations

export const WorkPartialWithRelationsSchema: z.ZodType<WorkPartialWithRelations> = WorkPartialSchema.merge(z.object({
  hero: z.lazy(() => HeroPartialWithRelationsSchema),
  fromWorks: z.lazy(() => WorkRelationPartialWithRelationsSchema).array(),
  toWorks: z.lazy(() => WorkRelationPartialWithRelationsSchema).array(),
})).partial()

export type WorkOptionalDefaultsWithPartialRelations = z.infer<typeof WorkOptionalDefaultsSchema> & WorkPartialRelations

export const WorkOptionalDefaultsWithPartialRelationsSchema: z.ZodType<WorkOptionalDefaultsWithPartialRelations> = WorkOptionalDefaultsSchema.merge(z.object({
  hero: z.lazy(() => HeroPartialWithRelationsSchema),
  fromWorks: z.lazy(() => WorkRelationPartialWithRelationsSchema).array(),
  toWorks: z.lazy(() => WorkRelationPartialWithRelationsSchema).array(),
}).partial())

export type WorkWithPartialRelations = z.infer<typeof WorkSchema> & WorkPartialRelations

export const WorkWithPartialRelationsSchema: z.ZodType<WorkWithPartialRelations> = WorkSchema.merge(z.object({
  hero: z.lazy(() => HeroPartialWithRelationsSchema),
  fromWorks: z.lazy(() => WorkRelationPartialWithRelationsSchema).array(),
  toWorks: z.lazy(() => WorkRelationPartialWithRelationsSchema).array(),
}).partial())

export default WorkSchema;
