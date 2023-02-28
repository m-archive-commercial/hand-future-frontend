/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import RootLayout from '../../components/layouts/root'

import { HeroEditableProfile } from '../../components/specs/hero/HeroEditableProfile'

import { fetchHero } from '../../utils/heroes'

import backendAPI from '../../utils/api'

import type { IWork } from '../../ds/work'

import type { GetServerSidePropsContext } from 'next'
import type { IHero } from '../../ds/hero'

export const HeroProfilePage = ({ hero, works }: {
  hero: IHero
  works: IWork[]
}): JSX.Element => (
  <RootLayout>
    <HeroEditableProfile hero={hero} works={works}/>
  </RootLayout>
  )

export default HeroProfilePage

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log('server: heroes/[id]')
  const id = ctx.query.id as unknown as string

  const hero = await fetchHero(id)
  console.log('got hero: ', hero)
  const resWorks = await backendAPI.get(`/works?user_id=${id}`)
  const works = resWorks.data.data.data
  console.log('got works: ', works)
  return {
    props: {
      works,
      hero
    }
  }
}
