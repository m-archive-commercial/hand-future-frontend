/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { IconRotateClockwise2 } from '@tabler/icons-react'
import * as htmlToImage from 'html-to-image'

import { Fonts } from '~/config/fonts'
import { genRandomShareCard, shareCardInit } from '~/lib/shareCard'
import { normalizeImageUri } from '~/lib/image'
import { useListHeroesQuery } from '~/states/api/heroApi'
import { FONT_WEIGHTS } from '~/ds/font'
import { BaseAvatar } from '~/components/shared/BaseAvatar'

import HeroSearch from '../../components/specs/user/HeroSearch'
import RenderShareCard from '../../components/specs/user/RenderShareCard'
import RootLayout from '../../components/layouts/RootLayout'
import backendAPI from '../../lib/api'
import InputText from '../../components/shared/InputText'
import InputTextArea from '../../components/shared/InputTextArea'

import type { FONT_WEIGHT } from '~/ds/font'
import type { ChangeEvent } from 'react'
import type { InputAction } from '~/components/shared/InputText'
import type { IShareCard } from '~/ds/hero'

export const CardPage = () => {
	
	const [searchKey, setSearchKey] = useState('')
	const [data, setData] = useState<IShareCard>(shareCardInit)
	const [midColor, setMidColor] = useState('#337799')
	const [themeColor, setThemeColor] = useState('#109B7B')
	const [fontIndex, setFontIndex] = useState(1) // 0: default, 1: ali
	const [fontWeightName, setFontWeightName] = useState<FONT_WEIGHT>(FONT_WEIGHTS[6])
	const [fontWeightTitle, setFontWeightTitle] = useState<FONT_WEIGHT>(FONT_WEIGHTS[8])
	const [fontWeightContent, setFontWeightContent] = useState<FONT_WEIGHT>(FONT_WEIGHTS[3])
	const [qrCodeUrl, setQrCodeUrl] = useState('https://gkleifeng.notion.site/da7ad92cb3414e6891c80e52541a6678')
	const [isGeneratingCard, setGeneratingCard] = useState(false)
	
	const { data: heroes = [] } = useListHeroesQuery()
	
	const refCanvas = useRef<HTMLDivElement>(null)
	
	const update = ({ type, value }: InputAction) => {
		setData({ ...data, [type]: value })
	}
	
	const onAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {return}
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('file', file)
		const resUploadAvatar = await backendAPI.post('/files/upload', formData)
		console.log({ resUploadAvatar })
		const avatar = resUploadAvatar.data.data as string
		setData({ ...data, avatar })
	}
	
	const onGenCard = async (): Promise<void> => {
		
		toast.info('正在生成卡片，请耐心等待片刻！')
		setGeneratingCard(true)
		console.log('generating dataUrl')
		try {
			const dataUrl = await htmlToImage.toPng(refCanvas.current!,
				{ pixelRatio: 4 /* 这个因子非常重要，否则低端浏览器图片会很糊 */ })
			console.log('generated !')
			const a = document.createElement('a')
			a.href = dataUrl // Image Base64 Goes here
			a.download = `美丽中国·携手未来·${data.name}.png`
			a.click() // Downloaded file
		} catch (e) {
			console.error(e)
			toast.error('生成失败！请联系南川！')
		} finally {
			setGeneratingCard(false)
		}
	}
	
	const onClickHero = (id: string) => {
		const hero = heroes.find((_) => _.id === id)
		console.log('clicked hero: ', hero)
		setData({ ...data, ...hero })
	}
	
	useEffect(() => {
		setData(genRandomShareCard())
	}, [])
	
	return (
		<RootLayout>
			{/* 使用横向布局 */}
			<div className="p-4 m-auto flex flex-wrap gap-8">
				
				{/* 1. 搜索区域 */}
				<HeroSearch heroes={heroes} searchKey={searchKey} setSearchKey={setSearchKey} onClickHero={onClickHero}/>
				
				{/* 2. 控制输入区域 */}
				<div className={'flex flex-col gap-1'}>
					<h2>Control</h2>
					<div className="divider"/>
					
					{/* todo: 添加一个搜索框，可以检索数据库中的人物
          但需要先将notion里的图都本地持久化才可以，否则html2image会无法使用 */}
					
					{/* 嘉宾头像 */}
					<label htmlFor="hero-avatar" className="flex items-center">
						<i>Click to upload a new avatar --{'>'}</i>
						<input id="hero-avatar" type="file" className="hidden" accept={'image/*'} onChange={onAvatarChange}/>
						
						{/* 在iphone浏览器里不显示 */}
						<BaseAvatar url={normalizeImageUri(data.avatar)} text={data.name}/>
					
					</label>
					
					{/* 嘉宾姓名、title */}
					<InputText id="hero-name" type="name" maxLen={4} placeholder={data.name} update={update}/>
					<InputTextArea id="hero-title" type="title" rows={2} cols={10} maxLength={30} placeholder={data.title}
					               update={update}
					/>
					
					{/* 文字标题、内容 */}
					<InputText type="articleTitle" placeholder={data.articleTitle} update={update}/>
					<InputTextArea rows={3} type="articleContent" placeholder={data.articleContent} update={update}/>
					
					{/* 二维码 */}
					<InputText label="QR Code" defaultValue={qrCodeUrl} update={({ value }) => {setQrCodeUrl(value)}}/>
					
					<div className="divider"/>
					
					{/* 控制主题色、过渡色 */}
					<InputText label="Theme Color" type="color" defaultValue={themeColor}
					           update={({ value }) => {setThemeColor(value)}}
					/>
					<InputText label="Mid Color" type="color" defaultValue={midColor}
					           update={({ value }) => {setMidColor(value)}}
					/>
					
					{/* 控制字体 */}
					
					<div className="form-control w-full">
						<label htmlFor="select-font" className="input-group">
							<span className="w-28">Font</span>
							<select id="select-font" className="select select-bordered flex-grow"
							        defaultValue={fontIndex}
							        onChange={(e) => setFontIndex(e.target.selectedIndex)}
							>
								{Fonts.map((fontItem, index) => (
									<option key={index} value={index}>{fontItem.name}</option>
								))}
							</select>
						</label>
					</div>
					
					<div className="form-control w-full">
						<label htmlFor="select-name-weight" className="input-group">
							<span className="w-28">Name Weight</span>
							<select id="select-name-weight" className="select select-bordered flex-grow"
							        defaultValue={fontWeightName}
							        onChange={(e) => setFontWeightName(e.target.value as unknown as FONT_WEIGHT)}
							>
								{FONT_WEIGHTS.map((weight) => (
									<option key={weight} value={weight}>{weight}</option>))}
							</select>
						</label>
					</div>
					
					<div className="form-control w-full">
						<label htmlFor="select-title=font-weight" className="input-group">
							<span className="w-28">Title Weight</span>
							<select id="select-title=font-weight" className="select select-bordered flex-grow"
							        defaultValue={fontWeightTitle}
							        onChange={(e) => setFontWeightTitle(e.target.value as unknown as FONT_WEIGHT)}
							>
								{FONT_WEIGHTS.map((weight) => (<option key={weight} value={weight}>{weight}</option>))}
							</select>
						</label>
					</div>
					
					<div className="form-control w-full">
						<label htmlFor="select-content-weight" className="input-group">
							<span className="w-28">Content Weight</span>
							<select id="select-content-weight" className="select select-bordered flex-grow"
							        defaultValue={fontWeightContent}
							        onChange={(e) => setFontWeightContent(e.target.value as unknown as FONT_WEIGHT)}
							>
								{FONT_WEIGHTS.map((weight) => (<option key={weight} value={weight}>{weight}</option>))}
							</select>
						</label>
					</div>
					
					{/* 生成卡片 */}
					<button type="button" className="btn btn-primary my-4" onClick={onGenCard} disabled={isGeneratingCard}>
						{
							isGeneratingCard ? <IconRotateClockwise2/> : '确认生成卡片'
						}
					</button>
				</div>
				
				{/* 3. 预览区域， 最终输出为：宽度 = 360 px 固定 */}
				<div>
					<h2>Preview</h2>
					<div className="divider"/>
					
					<RenderShareCard
						refCanvas={refCanvas}
						data={data}
						themeColor={themeColor}
						midColor={midColor}
						fontClass={Fonts[fontIndex].font?.className}
						fontWeightName={fontWeightName}
						fontWeightTitle={fontWeightTitle}
						fontWeightContent={fontWeightContent}
						qrCodeUrl={qrCodeUrl}
					/>
				</div>
			</div>
		</RootLayout>
	)
}

export default CardPage
