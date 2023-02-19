import { IHero, IShareCard } from '../../supports/ds/hero'
import BaseAvatar from '../../ui/base_components/BaseAvatar'
import { LoremIpsum, loremIpsum } from 'lorem-ipsum'
import InputText, { InputAction } from '../../ui/components/InputText'
import { ChangeEvent, useRef, useState } from 'react'
import InputTextArea from '../../ui/components/InputTextArea'
import backendAPI from '../../supports/utils/api'
import { COLOR_PRIMARY } from '../../config/theme'
import RootLayout from '../../ui/layouts/root'
import * as htmlToImage from 'html-to-image'
import { toast } from 'react-toastify'
import RenderShareCard from '../../ui/components/RenderShareCard'
import { Fonts } from '../../config/fonts'
import { FONT_WEIGHT, FONT_WEIGHTS } from '../../supports/ds/font'
import heroCard from '../../ui/components/HeroCard'
import HeroTable from '../../ui/components/HeroTable'

const SAMPLE_HERO: IHero = {
  'id': 'b4605fe2-fef7-4b87-b954-4724020a5a4e',
  'avatar': 'http://gkleifeng.com:3001/files/e28f823e-b064-11ed-aafd-5783702bc47d_周榕.png',
  'cities': '北京',
  'name': '周榕',
  'title': '著名建筑与城市研究学者'
}

const SAMPLE_DATA: IShareCard = {
  ...SAMPLE_HERO,
  articleTitle: loremIpsum(),
  articleContent: new LoremIpsum({
    sentencesPerParagraph: {
      max: 3,
      min: 2
    },
    wordsPerSentence: {
      max: 10,
      min: 3
    }
  }).generateParagraphs(3)
}


export interface CardProps {
  heroes: IHero[]
}

export const Card = (props: CardProps) => {
  const { heroes } = props
  const [searchKey, setSearchKey] = useState('')

  const [data, setData] = useState<IShareCard>(SAMPLE_DATA)
  const [midColor, setMidColor] = useState('#337799')
  const [themeColor, setThemeColor] = useState(COLOR_PRIMARY)
  const refCanvas = useRef<HTMLDivElement>(null)
  const [fontIndex, setFontIndex] = useState(1) // 0: default, 1: ali
  const [fontWeightTitle, setFontWeightTitle] = useState<FONT_WEIGHT>(FONT_WEIGHTS[8])
  const [fontWeightContent, setFontWeightContent] = useState<FONT_WEIGHT>(FONT_WEIGHTS[4])
  const [qrCodeUrl, setQrCodeUrl] = useState('https://gkleifeng.notion.site/da7ad92cb3414e6891c80e52541a6678')


  const update = ({ type, value }: InputAction) => {
    setData({ ...data, [type]: value })
  }

  const onAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    const resUploadAvatar = await backendAPI.post('/files/upload', formData)
    console.log({ resUploadAvatar })
    const avatar = resUploadAvatar.data.data as string
    setData({ ...data, avatar })
  }

  const onGenCard = async () => {
    if (data.avatar.includes('notion'))
      return toast.warning('默认头像仅做参考，请上传目标嘉宾头像！')

    console.log('generating dataUrl')
    const dataUrl = await htmlToImage.toPng(refCanvas.current!)
    console.log('generated !')
    let a = document.createElement('a')
    a.href = dataUrl //Image Base64 Goes here
    a.download = `美丽中国·携手未来·${data.name}.png`
    a.click() //Downloaded file
  }

  const onClickHero = (id: string) => {
    const hero = heroes.find((hero) => hero.id === id)
    setData({ ...data, ...hero })
  }

  return (
    <RootLayout>
      {/* 使用横向布局 */}
      <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1600px] md:p-8 gap-8'}>

        {/* 1. 搜索区域*/}
        <div>
          <h2>Search</h2>
          <div className={'divider'}/>

          <div className="form-control my-6 w-full">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered flex-1"
                     onChange={(e) => {setSearchKey(e.target.value)}}/>
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </div>

          <HeroTable heroes={heroes} searchKey={searchKey} onClickHero={onClickHero}/>

        </div>

        {/* 2. 控制输入区域 */}
        <div>
          <h2>Control</h2>
          <div className={'divider'}/>

          {/* todo: 添加一个搜索框，可以检索数据库中的人物
          但需要先将notion里的图都本地持久化才可以，否则html2image会无法使用 */}

          {/* 嘉宾头像 */}
          <label className={'flex items-center'}>
            <i>Click to upload a new avatar --{'>'}</i>
            <input type={'file'} className={'hidden'} accept={'images/*'} onChange={onAvatarChange}/>
            <BaseAvatar customClasses={'ml-5'} url={data.avatar} size={'md'}/>
          </label>

          {/* 嘉宾姓名、title */}
          <InputText type={'name'} maxLen={4} placeholder={data.name} update={update}/>
          <InputTextArea type={'title'} rows={2} cols={10} maxLength={30} placeholder={data.title} update={update}/>

          {/* 文字标题、内容 */}
          <InputText type={'articleTitle'} placeholder={data.articleTitle} update={update}/>
          <InputTextArea rows={3} type={'articleContent'} placeholder={data.articleContent} update={update}/>

          {/* 二维码 */}
          <InputText label={'QR Code'} defaultValue={qrCodeUrl} update={({ value }) => {setQrCodeUrl(value)}}/>

          <div className={'divider'}/>

          {/* 控制主题色、过渡色 */}
          <InputText label={'Theme Color'} type={'color'} defaultValue={themeColor}
                     update={({ value }) => {setThemeColor(value)}}
          />
          <InputText label={'Mid Color'} type={'color'} defaultValue={midColor}
                     update={({ value }) => {setMidColor(value)}}
          />

          {/* 控制字体 */}
          <div className="form-control mt-4 w-full">
            <label className={'input-group'}>
              <span className={'w-28'}>{'Font'}</span>
              <select className="select select-bordered flex-grow"
                      onChange={(e) => setFontIndex(e.target.selectedIndex)}>
                {Fonts.map((fontItem, index) => (
                  <option key={index}>{fontItem.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-control mt-4 w-full">
            <label className={'input-group'}>
              <span className={'w-28'}>{'Title Weight'}</span>
              <select className="select select-bordered flex-grow"
                      defaultValue={fontWeightTitle}
                      onChange={(e) => setFontWeightTitle(e.target.value as unknown as FONT_WEIGHT)}>
                {FONT_WEIGHTS.map((weight) => (<option key={weight} value={weight}>{weight}</option>))}
              </select>
            </label>
          </div>

          <div className="form-control mt-4 w-full">
            <label className={'input-group'}>
              <span className={'w-28'}>{'Content Weight'}</span>
              <select className="select select-bordered flex-grow"
                      defaultValue={fontWeightContent}
                      onChange={(e) => setFontWeightContent(e.target.value as unknown as FONT_WEIGHT)}>
                {FONT_WEIGHTS.map((weight) => (<option key={weight} value={weight}>{weight}</option>))}
              </select>
            </label>
          </div>

          {/* 生成卡片 */}
          <button className={'btn btn-primary my-4'} onClick={onGenCard}>确认生成卡片</button>
        </div>

        {/* 3. 预览区域， 最终输出为：宽度 = 360 px 固定 */}
        <div>
          <h2>Preview</h2>
          <div className={'divider'}/>

          <RenderShareCard
            refCanvas={refCanvas}
            data={data}
            themeColor={themeColor}
            midColor={midColor}
            fontClass={Fonts[fontIndex].font?.className}
            fontWeightTitle={fontWeightTitle}
            fontWeightContent={fontWeightContent}
            qrCodeUrl={qrCodeUrl}
          />
        </div>
      </div>
    </RootLayout>
  )
}

export default Card


export const getServerSideProps = async () => {
  const res = await backendAPI.get('/heroes/list')
  const heroes: IHero[] = res.data.list
  console.log('heroes: ', heroes)
  return { props: { heroes } }
}
