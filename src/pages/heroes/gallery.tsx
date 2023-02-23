import RootLayout from '../../ui/layouts/root'
import { backendAPI } from '../../supports/utils/api'
import { IHero } from '../../supports/ds/hero'
import HeroCard from '../../ui/components/HeroCard'
import Dialog from '../../ui/components/NominateDialog'

export interface IResArr {
  size: number
  list: any[]
}


export interface HeroesGalleryProps {
  data: IHero[]
}

export const HeroesGallery = ({ data }: HeroesGalleryProps) => {
  return (
    <RootLayout>
      <div className={'p-4  w-full flex flex-wrap justify-around justify-items-center gap-4'}>
        {
          data.map((item) => (
            <HeroCard data={item} key={item.id}/>
          ))
        }
      </div>
    </RootLayout>
  )
}
export default HeroesGallery

export const getServerSideProps = async () => {
  const res = await backendAPI.get('/heroes/list')
  const data: IResArr = res.data
  return { props: { data: data.list } }
}
