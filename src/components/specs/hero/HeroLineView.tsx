import { IHero } from '~/ds/hero'
import { getServerImagePath } from '~/lib/image'
import { BaseAvatar } from '~/components/shared/BaseAvatar'

export const HeroLineView = ({
	                             hero, onClickHero,
                             }: {
	                             hero: IHero,
	                             onClickHero?: (id: string) => void
                             },
) => {
	
	return (
		<tr onClick={() => {onClickHero && onClickHero(hero.id)}}>
			
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="rounded-full w-12 h-12">
							<BaseAvatar url={getServerImagePath(hero.avatar)} name={hero.name} size={'lg'}/>
						</div>
					</div>
					<div>
					</div>
				</div>
			</td>
			
			<td>
				<div className="font-bold">{hero.name}</div>
				<div className="text-sm opacity-50">{hero.cities}</div>
			</td>
		</tr>
	)
}
