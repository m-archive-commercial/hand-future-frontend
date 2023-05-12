import { InputHTMLAttributes } from 'react'

import { useUploadFileMutation } from '~/states/api/fileApi'

export const MyImageUploader = ({ onUploaded, ...props }: {
	onUploaded: (fileUri: string) => void
} & InputHTMLAttributes<HTMLInputElement>) => {
	const [uploadFile] = useUploadFileMutation()
	
	return (
		<input
			className={'w-full h-full'}
			type={'file'}
			accept={'image/*'}
			onChange={async (event) => {
				const files = event.target.files
				if (files?.length !== 1) return
				const file = files[0]
				console.log({ file })
				const { data: fileUri } = await uploadFile(file) as { data: string }
				console.log({ fileUri })
				await onUploaded(fileUri)
			}}
			{...props}
		/>
	)
}
