/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React from 'react'

export const HeroControls = ({onSubmit}: {
  onSubmit: any
}) => (
  <div className="grid grid-cols-2  gap-2">
    <button type="submit" className="btn btn-primary btn-sm">确认</button>
    <button type="button" className="btn btn-primary btn-sm" onClick={onSubmit}>提交</button>
  </div>
)
