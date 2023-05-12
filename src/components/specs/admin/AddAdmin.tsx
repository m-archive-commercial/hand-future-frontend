import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { useUpdateUserViaEmailMutation } from '~/states/api/userApi'

export const AddAdmin = () => {
	const [newAdmin, setNewAdmin] = useState('')
	
	const [updateUserViaEmail, { isSuccess, isError, error }] = useUpdateUserViaEmailMutation()
	
	useEffect(() => {if (isSuccess) {toast.success('添加成功')}}, [isSuccess])
	useEffect(() => {if (isError) {toast.success(`添加失败，原因：${(error as unknown as { data: { detail: string } }).data.detail!}`)}}, [isError])
	
	return (
		<Card>
			<CardHeader>
				<CardTitle>管理员</CardTitle>
			</CardHeader>
			<CardContent>
				<div className={'inline-flex items-center gap-2'}>
					<Input onChange={(event) => setNewAdmin(event.target.value)}/>
					
					<Button className={'shrink-0'} onClick={() => {
						updateUserViaEmail({ email: newAdmin, role: 'admin' })
					}}>添加</Button>
				</div>
			</CardContent>
		</Card>
	)
}
