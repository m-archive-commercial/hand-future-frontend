export type ID = string
export type TaskStatus = 'finished' | 'todo' | 'cancelled'

export interface IFeature {
	name: string
	status: TaskStatus
}


export const langs = ['en', 'sc', 'tc', 'jp'] as const
export type LangType = typeof langs[number]
export type MessageStatusType = 'OK' | 'ERROR' | 'ERROR_TOKEN_DRAIN'


