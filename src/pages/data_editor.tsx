/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRef } from 'react'
import Editor from '@monaco-editor/react'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'

import backendAPI from '../utils/api'
import RootLayout from '../components/layouts/RootLayout'

import type { GraphData } from 'react-force-graph-3d'
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

export type Editor = monaco.editor.IStandaloneCodeEditor

export const DataEditor = ({ data }: {
	data: GraphData
}): JSX.Element => {
	console.log('client: ', data)
	
	const router = useRouter()
	const editorRef = useRef<Editor>()
	
	const onSubmit = async () => {
		const content = editorRef.current?.getValue()
		console.log('content: ', content)
		
		if (!content) {
			toast.error('Content is required !')
			return
		}
		
		try {
			const dataNew = JSON.parse(content)
			if (!('nodes' in dataNew)) {
				toast.error('Key of `nodes` should be included !')
				return
			}
			
			if (!('links' in dataNew)) {
				toast.error('Key of `links` should be included !')
				return
			}
			
			const nodeIds: string[] = dataNew.nodes.map((node: { id: string }) => node.id)
			console.log({ dataNew, nodeIds })
			for (const link of dataNew.links) {
				if (!(nodeIds.includes(link.source))) {
					console.error({ link, source: link.source, nodeIds })
					toast.error(`Link source of ${link.source} doesn't exist in nodes !`)
					return
				}
				if (!(nodeIds.includes(link.target))) {
					toast.error(`Link target of ${link.target} doesn't exist in nodes !`)
					return
				}
			}
			
			await backendAPI.put('/data', dataNew)
			toast.success('Successfully updated data !')
		} catch (e) {
			console.error(e)
			if (e instanceof SyntaxError) {
				toast.error(e.message)
			}
			if (e instanceof AxiosError) {
				toast.error(e.message)
			}
		}
	}
	
	const onReset = async () => {
		await backendAPI.put('/data/reset')
		// ref: https://www.joshwcomeau.com/nextjs/refreshing-server-side-props/
		router.replace(router.asPath)
	}
	
	return (
		<RootLayout>
			
			<div className="m-2 flex items-center gap-2">
				<button
					className="text-sm rounded-lg bg-primary text-white px-3 py-1"
					type="button"
					onClick={onSubmit}
				>
					Save Changes
				</button>
				
				<button
					className="text-sm rounded-lg bg-primary text-white px-3 py-1"
					type="button"
					onClick={onReset}
				>
					Reset
				</button>
				
				<button
					className="text-sm rounded-lg bg-primary text-white px-3 py-1"
					type="button"
					onClick={() => {
						router.push('/')
					}}
				>
					Return to Graph Mode
				</button>
			</div>
			
			<Editor
				height="90vh"
				language="json"
				value={JSON.stringify(data, null, 2)}
				
				onMount={(editor, monaco) => {
					// here is the editor instance
					// you can store it in `useRef` for further usage
					console.log('hhh', editor, monaco)
					editorRef.current = editor
				}}
			/>
		
		</RootLayout>
	)
}

export default DataEditor

export const getServerSideProps = async (): Promise<{ props: { data: GraphData } }> => {
	const res = await backendAPI.get('/data')
	const { data } = res
	return {
		props: {
			data,
		},
	}
}
