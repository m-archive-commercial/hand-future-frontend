## todo

- [ ] 在html转image时，需要访问该node下的所有html资源，但是会在有中文文件名时（由于转义）无法匹配，所以需要在后端兼容中文的路径查找
- [ ] iOS 手机上传照片
- [ ] 思考生成的卡片宽度溢出问题（ios 375，目前宽度360，加上padding就溢出了）
- [ ] 目前字体逻辑倒是走通了，也理解了从网络或者本地加载字体的不同方式，唯一不能确认的是，既然nextjs已经基于导入的方式获得了字体，并可以填入class中，那是否意味着
  tailwindcss.config.js 中不需要再额外 explicitly 写 font 的 class 呢？ 核心参考：
    - https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
    - https://nextjs.org/docs/api-reference/next/font#applying-styles
- [ ] render html to image with svg
- [ ] auto upload package.json
- [ ] sort out the best practice between global and page layout
- [x] use layout in app/layout.js
    - 参考：https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages
    - 由于第三方包（例如我的MUI）对 SSR 的兼容还不到位，因此需要用 `"use client"`

## next.js relative

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## tips

### generate card

https://www.npmjs.com/package/html-to-image
https://www.npmjs.com/package/htmltocanvas

https://stackoverflow.com/questions/5534128/converting-html-to-svg-using-javascript-jquery
https://www.hiqpdf.com/demo/ConvertHtmlToSvg.aspx
http://html2canvas.hertzen.com/configuration

https://docs.htmlcsstoimage.com/

### 3d-force-graph

good example can be found
at: https://codesandbox.io/s/nextjs-typescript-react-force-graph-3d-forked-cmq2n?file=/src/FocusGraph.tsx:114-131

### canvas

`react-canvas` is not suitable for our project.

```text
 WARN  Issues with peer dependencies found
.
└─┬ react-canvas
  └── ✕ unmet peer react@^15.0.0: found 18.2.0

```

## bugfix

### install `sharp` for nextjs production image optimization as suggested to

ref: https://stackoverflow.com/a/73585638/9422455

```shell
sudo apt-get update
sudo apt-get -y install libvips-dev
npm rebuild sharp
sudo npm install sharp
```

### solved: `Extra attributes from the server: class`

这是由于插件引起的，例如我使用了 Liner，它会在 react 页面渲染完成之前尝试修改 dom，因此导致 hydration mismatch

参见：https://stackoverflow.com/a/74294741/9422455

同样，另一个插件「迅雷下载支持」触发了另一个
warning：`Uncaught (in promise) TypeError: Cannot read properties of null (reading '2')`

