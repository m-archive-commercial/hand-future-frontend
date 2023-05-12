import { IconLoaderQuarter } from '@tabler/icons-react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import RootLayout from '~/components/layouts/RootLayout'
import { Button } from '~/components/ui/button'
import { useInitHeroesMutation } from '~/states/api/heroApi'

export const InitHeroesPage = () => {
	
	const [initHeroes, { isLoading, isSuccess, isError, data }] = useInitHeroesMutation()
	
	useEffect(() => {if (isSuccess) {toast.success('初始化成功')}}, [isSuccess])
	useEffect(() => {if (isError) {toast.error('初始化失败')}}, [isError])
	
	return (
		<RootLayout>
			
			
			<Button
				disabled={isLoading}
				onClick={() => {
					initHeroes()
				}}>
				{isLoading ? <IconLoaderQuarter className={'animate-spin'}/> : '点击进行初始化'}
			</Button>
			
			<div className={'mt-8'}>目前一共有100+位嘉宾，每位嘉宾大概需要3秒完成初始化</div>
		</RootLayout>
	)
}

export default InitHeroesPage
