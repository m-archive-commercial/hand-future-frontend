/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import RootLayout from '../../components/layouts/root'
import { backendAPI } from '../../utils/api'

import HeroCard from '../../components/specs/HeroCard'
import Dialog from '../../components/specs/NominateDialog'

import type { IHero } from '../../ds/hero'

export interface IResArr {
  size: number
  list: any[]
}

export interface HeroesGalleryProps {
  data: IHero[]
}

export const HeroesGallery = ({ data }: HeroesGalleryProps) => (
  <RootLayout>
    <div className="p-4  w-full flex flex-wrap justify-around justify-items-center gap-4">
      {
          data.map((item) => (
            <HeroCard data={item} key={item.id}/>
          ))
        }
    </div>
  </RootLayout>
  )
export default HeroesGallery

export const getServerSideProps = async () => {
  const res = await backendAPI.get('/heroes/list')
  const {data} = res
  return { props: { data: data.list } }
}
