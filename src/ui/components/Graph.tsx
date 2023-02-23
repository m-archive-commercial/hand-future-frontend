import { useRef } from 'react'
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d'
import { Sprite, SpriteMaterial, TextureLoader } from 'three'
import data from '../../../public/avatar/index.json'

export const Graph = () => {
  console.log('[Graph] ')
  const fgRef = useRef<ForceGraphMethods>()

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      nodeLabel={'name'}
      nodeThreeObject={({ id }) => {
        const imgPath = `/avatar/${id}`
        console.log('loading img at path: ', imgPath)

        const imgTexture = new TextureLoader().load(imgPath)
        const material = new SpriteMaterial({ map: imgTexture, depthWrite: false })
        const img = new Sprite(material)
        img.scale.set(24, 24, 1)
        return img
      }}
    />
  )
}

export default Graph
