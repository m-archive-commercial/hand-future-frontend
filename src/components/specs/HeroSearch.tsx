/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import HeroTable from './HeroTable'

import type { IHero } from '../../ds/hero'

export const HeroSearch = ({
  heroes, searchKey, setSearchKey, onClickHero
}: {
  heroes: IHero[]
  searchKey?: string
  setSearchKey?: (s: string) => void
  onClickHero?: (id: string) => void
}) => (
  <div>
    <h2>Search</h2>
    <div className="divider"/>

    <div className="form-control my-6 w-full">
      <div className="input-group">
        <input type="text" placeholder="Search…" className="input input-bordered flex-1"
          onChange={(e) => {setSearchKey && setSearchKey(e.target.value)}}
        />
        <button type="button" className="btn btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>

    <HeroTable heroes={heroes} searchKey={searchKey} onClickHero={onClickHero}/>

  </div>
)

export default HeroSearch
