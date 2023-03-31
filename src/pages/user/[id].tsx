/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IUser } from '~/ds/user'

import RootLayout from '../../components/layouts/root'
import { HeroEditableProfile } from '../../components/specs/hero/HeroEditableProfile'
import { fetchHero, fetchUser } from '../../utils/heroes'
import backendAPI from '../../utils/api'

import type { IWork } from '../../ds/work'
import type { GetServerSidePropsContext } from 'next'
import type { IHero } from '../../ds/hero'

export const UserProfilePage = ({ hero, works }: {
  hero: IHero
  works: IWork[]
}): JSX.Element => (
  <RootLayout>
    <HeroEditableProfile hero={hero} works={works}/>
  </RootLayout>
)

export default UserProfilePage

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log('server: user/[id]')
  const id = ctx.query.id as unknown as string

  const user: IUser = await fetchUser(id)
  console.log('got hero: ', user)
  const resWorks = await backendAPI.get(`/works?user_id=${id}`)
  const works = resWorks.data
  console.log('got works: ', works)
  return {
    props: {
      works,
      hero: {
        ...user,
        id: user.username,
        avatar: user.avatar,
        title: user.nickname,
        connections: [],
        cover: user.avatar,
        name: user.nickname,
        description: '',
        cities: ''
      } as IHero,
    },
  }
}
