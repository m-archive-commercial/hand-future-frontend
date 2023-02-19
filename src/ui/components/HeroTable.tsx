import { IHero } from '../../supports/ds/hero'
import clsx from 'clsx'

export interface HeroTableProps {
  heroes: IHero[]
  searchKey?: string
  pageSize?: number
  pageNumber?: number
  onClickHero?: (id: string) => void
}

export const HeroTable = (props: HeroTableProps) => {
  const { heroes, pageSize = 10, pageNumber = 0, searchKey, onClickHero } = props
  return (
    <div className="overflow-auto max-w-[360px] max-h-[60vh]">
      <table className={clsx(
        // 'block',
        'table',
        // 'table-zebra',
        // 'table-compact'
      )}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
        </tr>
        </thead>

        <tbody>
        {
          heroes
            .filter((hero) => !searchKey || hero.name.includes(searchKey))
            // .filter((value, i) => i >= pageNumber * pageSize && i < (pageNumber + 1) * pageSize)
            .map((hero) => {
              return (
                <tr key={hero.id} onClick={() => {onClickHero && onClickHero(hero.id)}}>

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={hero.avatar} alt={hero.name}/>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{hero.name}</div>
                        <div className="text-sm opacity-50">{hero.cities}</div>
                      </div>
                    </div>
                  </td>

                  <td className={'max-w-4'}>
                    {hero.title}
                    {/*<br/>*/}
                    {/*<span className="badge badge-ghost badge-sm">Desktop Support Technician</span>*/}
                  </td>
                </tr>
              )
            })
        }

        </tbody>

      </table>
    </div>
  )
}

export default HeroTable
