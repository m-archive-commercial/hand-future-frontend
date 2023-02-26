/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useState } from 'react'

import { RegisterCore } from './RegisterCore'
import MDialog from '../shared/MDialog'

const RegisterDialog = () => {
  // 默认已经注册了！
  const [isRegistered, setRegistered] = useState(true)

  const trigger = (
    <div className="btn btn-ghost btn-circle avatar">
      <div className="avatar placeholder w-10">
        <div className="bg-neutral-focus text-neutral-content rounded-full ">
          <span className="text-sm">M</span>
        </div>
      </div>
    </div>
  )

  const content = <RegisterCore
    isRegistered={isRegistered}
    dispatchSetRegister={() => setRegistered(!isRegistered)}
                  />

  return (
    <MDialog trigger={trigger} title="注册/登录" content={content}/>
  )
}

export default RegisterDialog
