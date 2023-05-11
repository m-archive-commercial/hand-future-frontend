import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'

import { IHero } from '~/ds/hero'

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
export const getSampleHero = (): IHero => ({
	'email': '',
	'avatar': '/avatar/003.png',
	'cities': '',
	'name': mockName(),
	'title': mockTitle(),
	description: mockDesc(),
	partners: mockConnections(),
	cover: '/cover_growth.jpg',
})
