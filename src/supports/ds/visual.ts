export const SIZE_TYPES = ['sm', 'md', 'lg', 'xl', '2xl'] as const
export type SIZE_TYPE = typeof SIZE_TYPES[number]

export const avatarSizeMap: Record<SIZE_TYPE, string> = {
  sm: '12px',
  md: '20px',
  lg: '32px',
  xl: '64px',
  '2xl': '128px'
}

export const wSizeMap: Record<SIZE_TYPE, string> = {
  sm: 'w-12',
  md: 'w-16',
  lg: 'w-20',
  'xl': 'w-24',
  '2xl': 'w-28'
}

export const hSizeMap: Record<SIZE_TYPE, string> = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
  xl: 'h-24',
  '2xl': 'h-28'
}
export const tSizeMap: Record<SIZE_TYPE, string> = {
  sm: 'text-sm',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl',
  '2xl': 'text-6xl'
}
