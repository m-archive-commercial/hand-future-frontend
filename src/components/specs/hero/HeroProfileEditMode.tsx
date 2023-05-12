import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { getServerImagePath } from '~/lib/image'
import { BG_COVER_FALLBACK } from '~/config/cover'
import { UserAvatar } from '~/components/shared/BaseAvatar'
import { PartnerLink } from '~/components/specs/hero/PartnerLink'
import { Section } from '~/components/shared/Section'
import { WorkPresentation } from '~/components/specs/work/presentations'
import { IUser } from '~/ds/user'
import { IWork } from '~/ds/work'
import { Label } from '~/components/ui/label'
import { Button } from '~/components/ui/button'
import { useUploadFileMutation } from '~/states/api/fileApi'
import { useUpdateUserMutation } from '~/states/api/userApi'


const MyUploader = ({ inputId, userId, field }: { inputId: string, userId: string, field: Partial<keyof IUser> }) => {
	const [uploadFile] = useUploadFileMutation()
	const [updateUser] = useUpdateUserMutation()
	
	return (
		<input id={inputId} className={'w-full h-full'} type={'file'} hidden accept={'image/*'} onChange={async (event) => {
			const files = event.target.files
			if (files?.length !== 1) return
			const file = files[0]
			console.log({ file })
			const { data: fileUri } = await uploadFile(file) as { data: string }
			console.log({ fileUri })
			await updateUser({ id: userId, [field]: fileUri })
		}}/>
	)
}


export const HeroProfileEditMode = ({ user, works }: { user: IUser, works: IWork[] }) => {
	return (
		<div className="w-full grow flex flex-col gap-2">
			
			{/* cover with frontend captains */}
			<div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
				
				<AspectRatio.Root ratio={16 / 5}>
					<div
						style={{
							backgroundImage: `linear-gradient(to right, rgba(9, 148, 143, 1), rgba(9, 148, 143, 0)), url('${getServerImagePath(user?.cover) || BG_COVER_FALLBACK}')`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
						className="h-full w-full min-h-screen"/>
					
					<Button>
						<Label className="absolute bottom-2 right-2" htmlFor={'cover'}>更改封面</Label>
						<MyUploader inputId={'cover'} userId={user.id} field={'cover'}/>
					</Button>
				</AspectRatio.Root>
				
				<div className="absolute p-12 left-0 bottom-0 max-w-screen-sm flex flex-col gap-2">
					
					<div className="flex items-center gap-4">
						<UserAvatar user={user}/>
						<input
							placeholder="No Name Found !"
							type="text"
							className="input input-ghost"
							defaultValue={user?.name}
							// onChange={(e) => updateField('name', e.target.value)}
							// onBlur={() => setEditingName(false)}
						/>
					</div>
					
					<div className="text-lg">
									<textarea
										className={'w-[320px]'}
										placeholder="No Title Found !"
										defaultValue={user?.title}
										// onChange={(e) => updateField('title', e.target.value)}
										// onBlur={() => setEditingTitle(false)}
									/>
					</div>
					
					<div className="mt-8 text-xs">
						<textarea
							className={'w-[320px]'}
							placeholder="No Description Found !"
							value={user?.description}
							// onChange={(e) => updateField('description', e.target.value)}
							// onBlur={() => setEditingDesc(false)}
						/>
					
					</div>
					
					<div className="mt-8 flex items-center gap-1">
						<span>携手嘉宾：</span>
						{
							user?.partners?.length ?
								user?.partners.map((id) => <PartnerLink id={id} key={id}/>)
								: <span>暂无！</span>
						}
					</div>
				
				</div>
			</div>
			
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
			
			{/*{writable && <userAddWork user_id={user.email}/>}*/}
		
		</div>
	)
}
