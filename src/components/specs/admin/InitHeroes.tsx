import { IconLoaderQuarter } from '@tabler/icons-react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { useInitHeroesMutation } from '../../../store/states/api/heroApi'

export const InitHeroes = () => {
	
	const [initHeroes, { isLoading, isSuccess, isError }] = useInitHeroesMutation()
	
	useEffect(() => {if (isSuccess) {toast.success('初始化成功')}}, [isSuccess])
	useEffect(() => {if (isError) {toast.error('初始化失败')}}, [isError])
	
	
	return (
		<Card>
			<CardHeader>
				<CardTitle>从Notion中初始化大咖数据</CardTitle>
				<CardDescription>目前一共有100+位嘉宾，每位嘉宾大概需要3秒完成初始化</CardDescription>
			</CardHeader>
			
			<CardContent>
				<Button
					disabled={isLoading}
					onClick={() => {
						initHeroes()
					}}>
					{isLoading ? <IconLoaderQuarter className={'animate-spin'}/> : '开始'}
				</Button>
			
			</CardContent>
		</Card>
	)
}
