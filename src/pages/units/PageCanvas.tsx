import dynamic from 'next/dynamic'

const CompCanvas = dynamic(
  () => import('../../ui/CompCanvas'),
  { ssr: false }
)

export const PageCanvas = () => <CompCanvas/>

export default PageCanvas
