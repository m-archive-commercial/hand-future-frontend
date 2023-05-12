import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { ChangeEvent, useEffect, useState } from 'react'
import { IconSquareRoundedPlus } from '@tabler/icons-react'
import _ from 'lodash'
import { toast } from 'react-toastify'

import { normalizeImageUri } from '~/lib/image'
import { BG_COVER_FALLBACK } from '~/config/cover'
import { BaseAvatar } from '~/components/shared/BaseAvatar'
import { PartnerLink } from '~/components/specs/user/PartnerLink'
import { Section } from '~/components/shared/Section'
import { WorkPresentation } from '~/components/specs/work/presentations'
import { IUser } from '~/ds/user'
import { IWork } from '~/ds/work'
import { Label } from '~/components/ui/label'
import { Button } from '~/components/ui/button'
import { useUploadFileMutation } from '~/states/api/fileApi'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { useUpdateUserMutation } from '~/states/api/userApi'
import { HeroAddWork } from '~/components/specs/user/HeroAddWork'


const MyUploader = ({ inputId, onUploaded }: { inputId: string, onUploaded: (fileUri: string) => void }) => {
	const [uploadFile] = useUploadFileMutation()
	
	return (
		<input id={inputId} className={'w-full h-full'} type={'file'} hidden accept={'image/*'} onChange={async (event) => {
			const files = event.target.files
			if (files?.length !== 1) return
			const file = files[0]
			console.log({ file })
			const { data: fileUri } = await uploadFile(file) as { data: string }
			console.log({ fileUri })
			await onUploaded(fileUri)
		}}/>
	)
}

const RealTimeAvatar = ({ user, onImageUriChange }: { user: IUser, onImageUriChange: (fileUri: string) => void }) => {
	const [avatar, setAvatar] = useState(user.avatar)
	
	useEffect(() => {
		if (avatar && avatar !== user.avatar) {
			console.log({ avatar })
			onImageUriChange(avatar)
		}
	}, [avatar])
	
	return (
		<Label id={'avatar'}>
			<BaseAvatar url={avatar} text={user.name}/>
			<MyUploader inputId={'cover'} onUploaded={setAvatar}/>
		</Label>
	)
}


export const HeroProfileEditMode = ({ user, works }: { user: IUser, works: IWork[] }) => {
	// console.log({ user })
	
	const [updateUser] = useUpdateUserMutation()
	const [changed, setChanged] = useState<Partial<IUser>>({})
	
	const bindChange = (field: keyof Omit<IUser, 'role' | 'partners'>) => async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
		const value = typeof event === 'string' ? event : event.target.value
		// console.log({ field, value })
		setChanged({ ...changed, [field]: value })
	}
	
	return (
		<div className="w-full grow flex flex-col gap-2">
			
			{/* cover with frontend captains */}
			<div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
				
				<AspectRatio.Root ratio={16 / 5}>
					<div
						style={{
							backgroundImage: `linear-gradient(to right, rgba(9, 50, 50, 0), rgba(9, 148, 143, 1)), url('${user.cover ? normalizeImageUri(user.cover) : BG_COVER_FALLBACK}')`,
							backgroundSize: 'cover',
						}}
						className="h-full w-full"/>
					
					<Button>
						<Label className="absolute bottom-2 right-2" htmlFor={'cover'}>更改封面</Label>
						<MyUploader inputId={'cover'} onUploaded={bindChange('cover')}/>
					</Button>
				</AspectRatio.Root>
				
				<div className="absolute p-12 left-0 bottom-0 max-w-screen-sm flex flex-col gap-2">
					
					<div className="flex items-center gap-4">
						<RealTimeAvatar user={user} onImageUriChange={bindChange('avatar')}/>
						<Input placeholder={'你怎么还没有名字儿呀，快起一个吧！'} defaultValue={user.name} onChange={bindChange('name')}/>
					</div>
					
					<Textarea placeholder={'人在江湖走，怎能没有title！'} defaultValue={user.title} onChange={bindChange('title')}/>
					
					
					<div className="mt-8 flex items-center gap-1">
						<Label>携手嘉宾</Label>
						{
							user?.partners?.length ?
								user?.partners.map((id) => <PartnerLink id={id} key={id}/>)
								: <div className={'inline-flex items-center gap-1'}>
									<span className={'text-sm'}>我是一座静静的孤岛：）</span>
									<IconSquareRoundedPlus/>
								</div>
						}
					</div>
				
				</div>
			</div>
			
			
			{!_.isEmpty(changed) && <Button className={'w-full'} onClick={async () => {
				await updateUser({ id: user.id, ...changed })
				setChanged({})
				toast.success('已同步~')
			}}>提交改动</Button>}
			
			<Section title="作品集合"/>
			
			{/*  works */}
			{
				works.length
					?
					<div className="gap-4 grid md:grid-cols-2">
						{works.map((work) => <WorkPresentation key={work.id} work={work}/>)}
					</div>
					:
					<div className="h-24 w-full flex justify-center items-center text-xl font-medium text-gray-500">
						暂无作品，赶快上传一个吧！
					</div>
			}
			
			<HeroAddWork user_id={user.id}/>
		
		</div>
	)
}
