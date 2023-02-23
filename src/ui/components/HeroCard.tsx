import { IHero } from '../../supports/ds/hero'
import Dialog from './NominateDialog'
import Image from 'next/image'

/**
 * todo: use redux to alert working
 */
export const alertWorking = () => {

}

export interface HeroCardProps {
  data: IHero
}

export const HeroCard = ({ data }: HeroCardProps) => {
  return (
    <div className="card w-64 h-96 bg-base-100 image-full2">
      <figure><Image src={data.avatar} alt="avatar" width={256} height={256}/></figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-outline">{data.cities}</div>
        </h2>
        <p>{data.title}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline" onClick={alertWorking}>查看详情</button>

          {/*  我要提名 */}
          <Dialog hero={{ name: data.name, avatar: data.avatar }}
                  user={{ name: 'test', avatar: 'xx', message: '好想好想……' }}/>

        </div>
      </div>

    </div>
  )
}

export default HeroCard
