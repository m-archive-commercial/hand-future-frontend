import { LoremIpsum, loremIpsum } from 'lorem-ipsum'

import { IShareCard } from '~/ds/hero'
import { getSampleHero } from '~/mock/hero'

export const SAMPLE_DATA: IShareCard = {
	...getSampleHero(),
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
