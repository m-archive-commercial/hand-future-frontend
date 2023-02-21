import { useRef } from 'react'
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d'
import data from '../../../public/avatar/index.json'
import * as THREE from 'three'

export const Graph = () => {
  console.log('[Graph] ')
  const fgRef = useRef<ForceGraphMethods>()

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      // @ts-ignore
      nodeLabel={'name'}
      nodeThreeObject={({ id }) => {
        const imgPath = `/avatar/${id}`
        console.log('loading img at path: ', imgPath)
        const imgTexture = new THREE.TextureLoader().load(imgPath)
        const material = new THREE.SpriteMaterial({ map: imgTexture, depthWrite: false })
        const img = new THREE.Sprite(material)
        img.scale.set(24, 24, 24)
        return img
      }}
    />
  )
}

export default Graph
