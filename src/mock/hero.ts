import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'

export const mockName = (): string => loremIpsum({
	units: 'words',
	count: 1,
})
export const mockTitle = (): string => loremIpsum({
	count: 4,
	units: 'words',
})
export const mockDesc = (): string => loremIpsum({
	paragraphUpperBound: 4,
	paragraphLowerBound: 2,
	units: 'paragraphs',
})
export const mockConnections = (): string[] => _.uniq(Array.from(Array(Math.ceil(1 + Math.random() * 5))).map(() => mockName()))
