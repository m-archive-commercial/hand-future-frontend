import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { useState } from 'react'
import { IconSquareRoundedPlus } from '@tabler/icons-react'
import _ from 'lodash'
import { toast } from 'react-toastify'

import { normalizeImageUri } from '~/lib/image'
import { BG_COVER_FALLBACK } from '~/config/cover'
import { BaseAvatar } from '~/components/shared/BaseAvatar'
import { PartnerLink } from '~/components/specs/user/PartnerLink'
import { Section } from '~/components/shared/Section'
import { WorkPresentation } from '~/components/specs/work/WorkPresentation'
import { IUser } from '~/ds/user'
import { IWork } from '~/ds/work'
import { Label } from '~/components/ui/label'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { useUpdateUserMutation } from '~/states/api/userApi'
import { AddWork } from '~/components/specs/work/AddWork'
import { MyImageUploader } from '~/components/specs/general'
import { bindData } from '~/lib/utils'


export const HeroProfileEditMode = ({ user, works }: { user: IUser, works: IWork[] }) => {
	// console.log({ user })
	
	const [updateUser] = useUpdateUserMutation()
	const [changed, setChanged] = useState<Partial<IUser>>({})
	const bindChange = bindData(changed, setChanged)
	
	return (
		<div className="w-full grow flex flex-col gap-2">
			
			{/* cover with frontend captains */}
			<div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
				
				<AspectRatio.Root ratio={16 / 5}>
					<div
						style={{
							backgroundImage: `linear-gradient(to right, rgba(9, 50, 50, 0), rgba(9, 148, 143, 1)), url('${
								normalizeImageUri(changed.cover || user.cover || undefined) || BG_COVER_FALLBACK
							}')`,
							backgroundSize: 'cover',
						}}
						className="h-full w-full"/>
					
					<Button>
						<Label className="absolute bottom-2 right-2" htmlFor={'cover'}>更改封面</Label>
						<MyImageUploader hidden id={'cover'} onUploaded={bindChange('cover')}/>
					</Button>
				</AspectRatio.Root>
				
				<div className="absolute p-12 left-0 bottom-0 max-w-screen-sm flex flex-col gap-2">
					
					<div className="flex items-center gap-4">
						<Label id={'avatar'}>
							<BaseAvatar url={normalizeImageUri(changed.avatar || user.avatar || undefined)} text={user.name}/>
							<MyImageUploader hidden id={'cover'} onUploaded={bindChange('avatar')}/>
						</Label>
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
									<IconSquareRoundedPlus onClick={() => toast.warning('todo~')}/>
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
						{works.map((work) => <WorkPresentation key={work.id} work={work} isEditable/>)}
					</div>
					:
					<div className="h-24 w-full flex justify-center items-center text-xl font-medium text-gray-500">
						暂无作品，赶快上传一个吧！
					</div>
			}
			
			<AddWork user_id={user.id}/>
		
		</div>
	)
}
