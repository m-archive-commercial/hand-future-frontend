/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import Image from 'next/image'

import Dialog from '../specs/hero/NominateDialog'

import type { IHero } from '../../ds/hero'

/**
 * todo: use redux to alert working
 */
export const alertWorking = () => {

}

export interface HeroCardProps {
  data: IHero
}

export const HeroCard = ({ data }: HeroCardProps) => (
  <div className="card w-64 h-96 bg-base-100 image-full2">
    <figure><Image src={data.avatar} alt="avatar" width={256} height={256}/></figure>
    <div className="card-body">
      <h2 className="card-title">
        {data.name}
        <div className="badge badge-outline">{data.cities}</div>
      </h2>
      <p>{data.title}</p>
      <div className="card-actions justify-end">
        <button type="button" className="badge badge-outline" onClick={alertWorking}>查看详情</button>

        {/*  我要提名 */}
        <Dialog hero={{ name: data.name, avatar: data.avatar }}
          user={{ name: 'test', avatar: 'xx', message: '好想好想……' }}
        />

      </div>
    </div>

  </div>
)

export default HeroCard
