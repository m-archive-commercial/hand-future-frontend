/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import RootLayout from '../../components/layouts/root'

import { useRole } from '../../hooks/role'

import { HeroEditableProfile } from '../../components/specs/hero/HeroEditableProfile'

import { HeroProfile } from '../../components/specs/hero/HeroProfile'

import { fetchHero } from '../../utils/heroes'

import type { IHero } from '../../ds/hero'

export const HeroesUpload = (): JSX.Element => {
  const router = useRouter()
  const isAdmin = useRole() === 'admin'
  const [hero, setHero] = useState<IHero>()
  const id = router.query.id as string

  useEffect(() => {
    const updateHero = async () => {
      setHero(await fetchHero(id))
    }
    updateHero()
  }, [id])

  return (
    <RootLayout>
      {!hero && 'loading'}
      {hero && !isAdmin &&  <HeroProfile hero={hero}/>}
      {hero && isAdmin &&  <HeroEditableProfile hero={hero}/>}
    </RootLayout>
  )

}

export default HeroesUpload
