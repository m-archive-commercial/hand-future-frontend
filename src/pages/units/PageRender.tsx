import ImageAsHtml from 'react-render-as-image'

export const PageRender = () => {
  return (
    <ImageAsHtml height={500} width={300} alt="Hello World!">
      <div>Hello World!</div>
    </ImageAsHtml>
  )
}


export default PageRender
