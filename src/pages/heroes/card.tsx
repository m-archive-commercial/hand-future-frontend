import { IHero, IShareCard } from '../../supports/ds/hero'
import BaseAvatar from '../../ui/base_components/BaseAvatar'
import { LoremIpsum, loremIpsum } from 'lorem-ipsum'
import InputText, { InputAction } from '../../ui/components/InputText'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import InputTextArea from '../../ui/components/InputTextArea'
import backendAPI from '../../supports/utils/api'
import { COLOR_PRIMARY } from '../../config/theme'
import RootLayout from '../../ui/layouts/root'
import * as htmlToImage from 'html-to-image'
import { toast } from 'react-toastify'
import RenderShareCard from '../../ui/components/RenderShareCard'
import { Fonts } from '../../config/fonts'
import { FONT_WEIGHT, FONT_WEIGHTS } from '../../supports/ds/font'
import HeroTable from '../../ui/components/HeroTable'
import { IconRotateClockwise2 } from '@tabler/icons-react'

// cao ！ 不能写死 url 啊 ！
const SAMPLE_HERO: IHero = {
  'id': '',
  'avatar': '/cover_growth.jpg',
  'cities': '',
  'name': loremIpsum({
    sentenceLowerBound: 1,
    sentenceUpperBound: 2
  }),
  'title': loremIpsum({
    sentenceLowerBound: 3,
    sentenceUpperBound: 4,
    paragraphLowerBound: 1,
    paragraphUpperBound: 2
  })
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


export const Card = ({ heroes }: {
  heroes: IHero[]
}) => {

  // const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(setHeroes(heroes))
  }, [])

  const [searchKey, setSearchKey] = useState('')
  const [data, setData] = useState<IShareCard>(SAMPLE_DATA)
  const [midColor, setMidColor] = useState('#337799')
  const [themeColor, setThemeColor] = useState(COLOR_PRIMARY)
  const [fontIndex, setFontIndex] = useState(1) // 0: default, 1: ali
  const [fontWeightName, setFontWeightName] = useState<FONT_WEIGHT>(FONT_WEIGHTS[6])
  const [fontWeightTitle, setFontWeightTitle] = useState<FONT_WEIGHT>(FONT_WEIGHTS[8])
  const [fontWeightContent, setFontWeightContent] = useState<FONT_WEIGHT>(FONT_WEIGHTS[3])
  const [qrCodeUrl, setQrCodeUrl] = useState('https://gkleifeng.notion.site/da7ad92cb3414e6891c80e52541a6678')
  const [isGeneratingCard, setGeneratingCard] = useState(false)

  const refCanvas = useRef<HTMLDivElement>(null)
  console.log(data)


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
    if (!/\/\/gkleifeng.com/.test(data.avatar))
      return toast.warning('默认头像仅做参考，请上传目标嘉宾头像！')

    toast.info('正在生成卡片，请耐心等待片刻！')
    setGeneratingCard(true)
    console.log('generating dataUrl')
    try {
      const dataUrl = await htmlToImage.toPng(
        refCanvas.current!,
        {
          pixelRatio: 4 // 这个因子非常重要，否则低端浏览器图片会很糊
        }
      )
      console.log('generated !')
      let a = document.createElement('a')
      a.href = dataUrl //Image Base64 Goes here
      a.download = `美丽中国·携手未来·${data.name}.png`
      a.click() //Downloaded file
    } catch (e) {
      console.error(e)
      toast.error('生成失败！请联系南川！')
    } finally {
      setGeneratingCard(false)
    }

  }

  const onClickHero = (id: string) => {
    const hero = heroes.find((hero) => hero.id === id)
    console.log('clicked hero: ', hero)
    setData({ ...data, ...hero })
  }

  console.log('current data: ', data)

  return (
    <RootLayout>
      {/* 使用横向布局 */}
      <div className={'m-auto flex flex-wrap gap-8'}>

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
            <input id={'hero-avatar'} type={'file'} className={'hidden'} accept={'image/*'} onChange={onAvatarChange}/>
            <BaseAvatar customClasses={'ml-5'} url={data.avatar} size={'lg'}/>
          </label>

          {/* 嘉宾姓名、title */}
          <InputText id={'hero-name'} type={'name'} maxLen={4} placeholder={data.name} update={update}/>
          <InputTextArea id={'hero-title'} type={'title'} rows={2} cols={10} maxLength={30} placeholder={data.title}
                         update={update}/>

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
                      defaultValue={fontIndex}
                      onChange={(e) => setFontIndex(e.target.selectedIndex)}>
                {Fonts.map((fontItem, index) => (
                  <option key={index} value={index}>{fontItem.name}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-control mt-4 w-full">
            <label className={'input-group'}>
              <span className={'w-28'}>{'Name Weight'}</span>
              <select className="select select-bordered flex-grow"
                      defaultValue={fontWeightName}
                      onChange={(e) => setFontWeightName(e.target.value as unknown as FONT_WEIGHT)}>
                {FONT_WEIGHTS.map((weight) => (
                  <option key={weight} value={weight}>{weight}</option>))}
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
          <button className={'btn btn-primary my-4'} onClick={onGenCard} disabled={isGeneratingCard}>
            {
              isGeneratingCard ? <IconRotateClockwise2/> : '确认生成卡片'
            }
          </button>
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
            fontWeightName={fontWeightName}
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
  return {
    props: {
      heroes: res.data.list
    }
  }
}
