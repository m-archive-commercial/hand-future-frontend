/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // use images, o.w. would cause: hostname "mmbiz.qpic.cn" is not configured under images in your `next.config.js`
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: "gkleifeng.com"
      },
      {
        protocol: 'https',
        hostname: "gkleifeng.com"
      },

      // wechat article
      {
        protocol: 'http',
        hostname: 'mmbiz.qpic.cn'
      },
      {
        protocol: 'https',
        hostname: 'mmbiz.qpic.cn'
      },

      // pinterest
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      },

      // notion
      {
        protocol: "https",
        hostname: "gkleifeng.notion.site"
      },
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com"
      },

      // random images
      {
        protocol: 'http',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }

    ]
  }

}

module.exports = nextConfig
