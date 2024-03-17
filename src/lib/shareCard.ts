import { LoremIpsum, loremIpsum } from 'lorem-ipsum'

import { IShareCard } from '../schema/hero'
import { mockConnections, mockDesc, mockName, mockTitle } from '~/mock/hero'


export const shareCardInit: IShareCard = {
	id: '',
	'avatar': '/avatar/003.png',
	'cities': '',
	'name': '',
	'title': '',
	description: '',
	partners: [],
	cover: '/cover_growth.jpg',
	articleTitle: '',
	articleContent: '',
}


export const genRandomShareCard = (): IShareCard => ({
		id: '',
		'avatar': '/avatar/003.png',
		'cities': '',
		'name': mockName(),
		'title': mockTitle(),
		description: mockDesc(),
		partners: mockConnections(),
		cover: '/cover_growth.jpg',
		articleTitle: loremIpsum(),
		articleContent: new LoremIpsum({
			sentencesPerParagraph: {
				max: 3,
				min: 2,
			},
			wordsPerSentence: {
				max: 10,
				min: 3,
			},
		}).generateParagraphs(3),
	}
)
