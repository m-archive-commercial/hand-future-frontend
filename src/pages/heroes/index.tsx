/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import RootLayout from '../../components/layouts/root'
import HeroCard from '../../components/shared/HeroCard'
import { fetchHeroes } from '../../utils/heroes'

import type { GetServerSideProps } from 'next'
import type { IHero } from '../../ds/hero'

export const HeroesGallery = ({ data }: {
  data: IHero[]
}): JSX.Element => (

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

export const getServerSideProps: GetServerSideProps = async () => ({ props: { data: await fetchHeroes()} })
