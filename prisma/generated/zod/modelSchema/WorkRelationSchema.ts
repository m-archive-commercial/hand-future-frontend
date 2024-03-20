import { z } from 'zod';
import type { WorkWithRelations } from './WorkSchema'
import type { WorkPartialWithRelations } from './WorkSchema'
import type { WorkOptionalDefaultsWithRelations } from './WorkSchema'
import { WorkWithRelationsSchema } from './WorkSchema'
import { WorkPartialWithRelationsSchema } from './WorkSchema'
import { WorkOptionalDefaultsWithRelationsSchema } from './WorkSchema'

/////////////////////////////////////////
// WORK RELATION SCHEMA
/////////////////////////////////////////

export const WorkRelationSchema = z.object({
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  fromId: z.string(),
  toId: z.string(),
})

export type WorkRelation = z.infer<typeof WorkRelationSchema>

/////////////////////////////////////////
// WORK RELATION PARTIAL SCHEMA
/////////////////////////////////////////

export const WorkRelationPartialSchema = WorkRelationSchema.partial()

export type WorkRelationPartial = z.infer<typeof WorkRelationPartialSchema>

/////////////////////////////////////////
// WORK RELATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WorkRelationOptionalDefaultsSchema = WorkRelationSchema.merge(z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type WorkRelationOptionalDefaults = z.infer<typeof WorkRelationOptionalDefaultsSchema>

/////////////////////////////////////////
// WORK RELATION RELATION SCHEMA
/////////////////////////////////////////

export type WorkRelationRelations = {
  from: WorkWithRelations;
  to: WorkWithRelations;
};

export type WorkRelationWithRelations = z.infer<typeof WorkRelationSchema> & WorkRelationRelations

export const WorkRelationWithRelationsSchema: z.ZodType<WorkRelationWithRelations> = WorkRelationSchema.merge(z.object({
  from: z.lazy(() => WorkWithRelationsSchema),
  to: z.lazy(() => WorkWithRelationsSchema),
}))

/////////////////////////////////////////
// WORK RELATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type WorkRelationOptionalDefaultsRelations = {
  from: WorkOptionalDefaultsWithRelations;
  to: WorkOptionalDefaultsWithRelations;
};

export type WorkRelationOptionalDefaultsWithRelations = z.infer<typeof WorkRelationOptionalDefaultsSchema> & WorkRelationOptionalDefaultsRelations

export const WorkRelationOptionalDefaultsWithRelationsSchema: z.ZodType<WorkRelationOptionalDefaultsWithRelations> = WorkRelationOptionalDefaultsSchema.merge(z.object({
  from: z.lazy(() => WorkOptionalDefaultsWithRelationsSchema),
  to: z.lazy(() => WorkOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// WORK RELATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type WorkRelationPartialRelations = {
  from?: WorkPartialWithRelations;
  to?: WorkPartialWithRelations;
};

export type WorkRelationPartialWithRelations = z.infer<typeof WorkRelationPartialSchema> & WorkRelationPartialRelations

export const WorkRelationPartialWithRelationsSchema: z.ZodType<WorkRelationPartialWithRelations> = WorkRelationPartialSchema.merge(z.object({
  from: z.lazy(() => WorkPartialWithRelationsSchema),
  to: z.lazy(() => WorkPartialWithRelationsSchema),
})).partial()

export type WorkRelationOptionalDefaultsWithPartialRelations = z.infer<typeof WorkRelationOptionalDefaultsSchema> & WorkRelationPartialRelations

export const WorkRelationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<WorkRelationOptionalDefaultsWithPartialRelations> = WorkRelationOptionalDefaultsSchema.merge(z.object({
  from: z.lazy(() => WorkPartialWithRelationsSchema),
  to: z.lazy(() => WorkPartialWithRelationsSchema),
}).partial())

export type WorkRelationWithPartialRelations = z.infer<typeof WorkRelationSchema> & WorkRelationPartialRelations

export const WorkRelationWithPartialRelationsSchema: z.ZodType<WorkRelationWithPartialRelations> = WorkRelationSchema.merge(z.object({
  from: z.lazy(() => WorkPartialWithRelationsSchema),
  to: z.lazy(() => WorkPartialWithRelationsSchema),
}).partial())

export default WorkRelationSchema;
