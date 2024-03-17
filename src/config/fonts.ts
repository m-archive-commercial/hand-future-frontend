import localFont from '@next/font/local'

import { IFontItem } from '../schema/font'

/**
 * 本地导入字体的方式，本来是打算用的，但是后来想起来不如直接用公开的代码导入，此处就不注释了，留着做参考
 * ref: https://nextjs.org/docs/basic-features/font-optimization#local-fonts
 *
 * 本地导入参考：
 * https://nextjs.org/docs/basic-features/font-optimization#local-fonts
 * https://nextjs.org/docs/api-reference/next/font#nextfontlocal
 *
 * @type {NextFont}
 */
export const fontAliPuHui2 = localFont({
	src: [
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-35-Thin.otf', weight: '100', style: 'thin' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-45-Light.otf', weight: '200', style: 'light' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-55-Regular.otf', weight: '300', style: 'regular' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-65-Medium.otf', weight: '400', style: 'medium' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-75-SemiBold.otf', weight: '500', style: 'semibold' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-85-Bold.otf', weight: '600', style: 'bold' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-95-ExtraBold.otf', weight: '700', style: 'extrabold' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-105-Heavy.otf', weight: '800', style: 'heavy' },
		{ path: '../../assets/fonts/otf/AlibabaPuHuiTi-2-115-Black.otf', weight: '900', style: 'black' },
	],
	variable: '--font-AliPuHui2',
})

export const Fonts: IFontItem[] = [
	{
		name: '默认',
	},
	{
		name: '阿里巴巴普惠2',
		font: fontAliPuHui2,
	},
]
