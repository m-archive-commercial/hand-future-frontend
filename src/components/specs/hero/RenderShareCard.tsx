/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import type { Ref } from 'react'

import clsx from 'clsx'

import Image from 'next/image'

import { QRCodeSVG } from 'qrcode.react'

import BaseAvatar from '../../shared/BaseAvatar'

import type { IShareCard } from '../../../ds/hero'

export interface RenderShareCardProps {
  refCanvas: Ref<HTMLDivElement>
  themeColor: string
  midColor: string
  data: IShareCard
  fontClass?: string
  fontWeightName?: string
  fontWeightTitle?: string
  fontWeightContent?: string
  qrCodeUrl: string
}

export const RenderShareCard = (props: RenderShareCardProps) => {
  const {
    refCanvas, themeColor, midColor, data, fontClass,
    fontWeightName,
    fontWeightTitle,
    fontWeightContent,
    qrCodeUrl
  } = props
  return (
    <div id="render" ref={refCanvas} className={clsx(`w-[360px] p-4 relative`, fontClass)}
      style={{ background: `linear-gradient(to bottom, ${themeColor}, ${midColor}, ${themeColor})` }}
    >
      <div className="rounded-3xl bg-white p-4">

        {/* avatar | name - title */}
        <div className="flex justify-around items-center">
          {/*  avatar */}

          {/* todo: 在iphone浏览器里不显示 */}
          <BaseAvatar
            customClasses="m-4"
            url={data.avatar} name={data.name} size="lg"
          />

          {/*  name - title */}
          <div className="flex-1 flex flex-col justify-center items-baseline">
            <div className="text-black text-3xl font-black flex  ">

              {/* 2.10 小手图形-03.svg */}

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.95 91.21" height={30}>
                <defs>
                  <style>
                    {
                      `.cls-1,.cls-2{fill:#fff;}
                    .cls-2,.cls-3{stroke:#231815;stroke-width:2px;}
                    .cls-2,.cls-3,.cls-4{stroke - miterlimit:10;}
                    .cls-3,.cls-4{fill:none;}
                    .cls-4{stroke:#64be96;stroke-width:3px;}`
                    }
                  </style>
                </defs>
                <g id="图层_9" data-name="图层 9">
                  <path className="cls-1"
                    d="M37.09,43.94A10.88,10.88,0,0,0,30,45.43c-3.3,2.15-4.57,7-4.65,7.27l.56,10.15a6.31,6.31,0,0,0,3,2.08l10.45,1.68,3.63.58s6.88,4.22,8.64,4.47a6.32,6.32,0,0,0,3.82-.4c1-.38,1.61-1.89,1.36-2.06"
                  />
                  <polyline className="cls-1" points="40.26 69.13 52.08 71.93 42.01 65.9 39.09 65.9"/>
                  <path className="cls-1"
                    d="M62.3,58.82v5.83L60.08,66.2c3.33-2.38,1.58-5.1.55-6.85s-8.39-6.23-8.39-6.23-6.43-3.65-8.88-4.2-3.49,2.46-3.49,2.46-1.9,3-4.12,1.9S34,50.42,34,49.39s1.82-7.77,10.62-6.81,17.68,8.8,17.68,8.8"
                  />
                  <path className="cls-1" d="M46.92,62.86l8.88,5.88s3.86,1.64,4.35-2.15-9.86-8.67-9.86-8.67"/>
                  <line className="cls-1" x1="50.2" y1="73.43" x2="52.23" y2="71.78"/>
                  <path className="cls-1"
                    d="M60.08,66.2,49.24,59.48l-8.17-9.94a2.05,2.05,0,0,1,2.29-.62,64.78,64.78,0,0,1,10.51,5.23,35.55,35.55,0,0,1,7.19,5.94l.84,3.85"
                  />
                  <polyline className="cls-1" points="62.3 51.27 73.18 51.27 73.18 64.53 62.3 64.53"/>
                  <line className="cls-2" x1="61.57" y1="64.65" x2="73.18" y2="64.65"/>
                  <line className="cls-2" x1="61.9" y1="51.27" x2="73.18" y2="51.27"/>
                  <path className="cls-3" d="M25.34,51.66c.08-.24,1.35-4.4,4.65-6.24a12.51,12.51,0,0,1,7.1-1.28"/>
                  <path className="cls-3" d="M50.29,58s10.35,4.88,9.86,8.67-4.35,2.15-4.35,2.15l-8.88-5.89"/>
                  <path className="cls-3"
                    d="M42.94,67.23s6.88,4.22,8.64,4.47a6.32,6.32,0,0,0,3.82-.41c1-.37,1.61-1.88,1.36-2.06"
                  />
                  <ellipse className="cls-2" cx="32.02" cy="66.22" rx="3.15" ry="4.09"/>
                  <ellipse className="cls-2" cx="37.09" cy="69.52" rx="3.15" ry="4.09"/>
                  <ellipse className="cls-2" cx="42.01" cy="71.93" rx="2.92" ry="3.51"/>
                  <ellipse className="cls-2" cx="47.29" cy="73.46" rx="2.92" ry="3.15"/>
                  <path className="cls-3" d="M28.86,65a4.8,4.8,0,0,1-3.19-1.79"/>
                  <path className="cls-3"
                    d="M60.08,66.24c3.33-2.38,1.58-5.11.55-6.86s-8.39-6.23-8.39-6.23-6.43-3.64-8.88-4.2-3.49,2.46-3.49,2.46-1.9,3-4.12,1.9S34,50.46,34,49.43s1.82-7.77,10.62-6.82,18,8.9,18,8.9"
                  />
                  <polyline className="cls-1" points="15.7 50.16 26.58 50.16 26.58 63.42 15.7 63.42"/>
                  <line className="cls-2" x1="15.7" y1="63.54" x2="26.58" y2="63.54"/>
                  <line className="cls-2" x1="15.29" y1="50.16" x2="26.58" y2="50.16"/>
                  <line className="cls-4" x1="43.53" y1="28.19" x2="43.53" y2="14.18"/>
                  <line className="cls-4" x1="55.85" y1="33.73" x2="64.4" y2="22.64"/>
                  <line className="cls-4" x1="30.36" y1="33.73" x2="21.81" y2="22.64"/>
                  <line className="cls-4" x1="22.92" y1="42.27" x2="10.5" y2="35.81"/>
                  <line className="cls-4" x1="62.96" y1="42.27" x2="75.38" y2="35.81"/>
                </g>
              </svg>

              {/* name */}
              <p className={clsx('ml-2', '-translate-y-2', fontWeightName)}>{data.name}</p>

            </div>

            {/* title */}
            <div className={clsx('text-sm')}>
              {data.title.split('\n').map((s, index) => (
                <p key={index}>{s}</p>
              ))}
            </div>
          </div>
        </div>

        {/*  article */}
        <article className="prose">
          <h2 className={clsx(' text-center mt-4 mb-3', fontWeightTitle)}>{data.articleTitle}</h2>

          {data.articleContent.split('\n').map((paragraph, index) => (
            <p key={index} className={clsx(
              fontWeightContent,
              ' text-[16px] my-[7px] leading-normal text-justify'
            )}
            >{paragraph}
            </p>
          ))}
        </article>

        {/* todo: 方法一为什么用 Image fill 颜色就不起作用了 ？ */}
        {/* <Image src={'/card/big_hand-2.svg'} alt={'mother f**k'} className={`absolute left-0 bottom-[180px] w-full`} */}
        {/*       width={320} height={240}/> */}

        {/* 方法二 */}
        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1264.5 501.4" // 这个有用，不能删
          width={368} height={240}
          className="-ml-9 absolute bottom-[130px]"
        >
          <style type="text/css">
            {
              '.st0{fill:white;stroke:#000000;stroke-width:17;stroke-linecap:round;stroke-linejoin:round;}' +
              `.st1{fill:none;stroke:${themeColor};stroke-width:16;stroke-miterlimit:10;}`
            }
          </style>
          <g id="图层_2_1_">
            <g id="图层_3">
              <path className="st0" d="M701.7,317.2c-5.7-7.4-5.8-8-7.7-11.9c-8.7-18.1-7.8-57-9.7-76.5c-0.8-7.8,0-15.7-2.2-23.4
			c-3.7-13-17.2-17.7-27.6-9.5c-9.2,7.2-13.5,16.3-14.6,28.2c-1.6,17.7-0.6,58.3,1.7,75.6c1.6,12.1-1,23.9,0.1,35.9
			c1.2,13.5-1.2,27.3,2.4,40.8c6.1,23,22,35.6,43.9,41.4c26.8,7.1,54.2,7.4,81.8,7.7c24.7,0.3,93.5,7,103.1,8.1
			c26.6,3.1,53.2,6.6,79.8,9.8c2.4,0.3,278.9,44.2,311.8,49.5V321.5c-18.1,0.3-434.3-0.4-462.7-2.7c-13.5-1.1-21.8-7.7-25.7-19.4
			c-14-41.9-28.8-83.6-36.4-127.2c-3.1-18-4.3-36.2-3.7-54.4c0.5-17.8-0.1-71-0.7-88.8c-0.4-10.4-10.2-20.3-19.9-20.5
			c-13.2-0.3-23.3,6.7-26.4,18.6c-0.5,1.9-0.9,3.8-1.3,5.7"
              />
              <path className="st0" d="M661.8,190.5c-0.5-1.6-1.8-3.4-1.5-4.9c6-35-3-82.6,1-117.7c1.3-11.7,5.2-22,15.4-29.1
			c11.7-8.1,25-2.9,28.2,11.5c1.1,4.5,1.5,9.1,1.1,13.6c-4.1,36.8-0.1,108.5,8.1,144.4c0.8,2.9,1.4,5.9,1.8,8.9"
              />
              <path className="st0" d="M570.2,317.2c5.7-7.4,5.8-8,7.7-11.9c8.7-18.1,7.8-57,9.7-76.5c0.8-7.8,0-15.7,2.2-23.4
			c3.7-13,17.2-17.7,27.6-9.5c9.2,7.2,13.5,16.3,14.6,28.2c1.6,17.7,0.6,58.3-1.7,75.6c-1.6,12.1,1,23.9-0.1,35.9
			c-1.2,13.5,1.2,27.3-2.4,40.8c-6.1,23-22,35.6-43.9,41.4c-26.8,7.1-54.2,7.4-81.9,7.7c-24.7,0.3-93.5,7-103.1,8.1
			c-26.6,3.1-53.2,6.6-79.8,9.8c-2.4,0.3-229.2,27.9-316.6,49.5l0-171.8c18.8,0.3,439.2,0.1,467.6-2.2c13.5-1.1,21.8-7.7,25.7-19.4
			c14-41.9,28.8-83.6,36.4-127.2c3.1-18,4.3-36.2,3.7-54.4c-0.5-17.8,0.1-71,0.7-88.8c0.4-10.4,10.2-20.3,19.9-20.5
			c13.2-0.3,23.3,6.7,26.4,18.6c0.5,1.9,0.9,3.8,1.3,5.7"
              />
              <path className="st0" d="M610.2,190.5c0.5-1.6,1.8-3.4,1.5-4.9c-6-35,3-82.6-1-117.7c-1.3-11.7-5.2-22-15.4-29.1
			c-11.7-8.1-25-2.9-28.3,11.5c-1.1,4.5-1.4,9.1-1,13.6c4.1,36.8,0.1,108.5-8.1,144.4c-0.8,2.9-1.4,5.9-1.8,8.9"
              />
              <path className="st1" d="M364.4,139.6l-0.4-2.7c-8.3-56,30.7-105.4,86.7-113.7l1.1-0.2"/>
              <path className="st1" d="M438.5,134.3L438.5,134.3c-18.1-28.9-9.5-67,19.4-85.1c0,0,0,0,0,0l0.6-0.3"/>
              <path className="st1" d="M833.5,209L833.5,209c18.4,18,18.7,47.5,0.8,65.9l-0.3,0.4"/>
              <path className="st1" d="M888.3,190.3L888.3,190.3c20.3,37.6,6.2,84.5-31.4,104.8l-0.7,0.4"/>
            </g>
          </g>
        </svg>

        <div className="h-[140px]"/>
        <div className="text-2xl text-center m-2 font-black" style={{ color: themeColor }}>携手的未来</div>

        {/* 二维码 */}
        <QRCodeSVG value={qrCodeUrl} className="mx-auto my-2" width="64px" height="64px"/>

        <div className="text-black text-center text-sm text-gray-500">
          <p>扫码查看活动介绍</p>
          <p>欢迎您们的加入</p>
        </div>
      </div>

    </div>
  )
}

export default RenderShareCard
