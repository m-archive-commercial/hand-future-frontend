import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ChangeEvent } from 'react'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const bindData = <T>(data: T, setData: (data: T) => void) => (field: keyof T) => async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
	const value = typeof event === 'string' ? event : event.target.value
	// console.log({ field, value })
	setData({ ...data, [field]: value })
}
