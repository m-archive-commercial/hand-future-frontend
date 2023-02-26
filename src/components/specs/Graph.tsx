/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import {  useRef, useState } from 'react'

import clsx from 'clsx'

import ForceGraph3D from 'react-force-graph-3d'
import { Sprite, SpriteMaterial, TextureLoader } from 'three'

import { useRouter } from 'next/router'

import useWindowDimensions from '../../hooks/window'
import { useBooleanOption, useColorOption, useNumberOption, useSelectOption } from '../../hooks/panel_3dgraph'

import { DagModes, ForceEngines, NumDimensions } from '../../ds/panel_3dgraph'

import { useRole } from '../../hooks/role'

import type { DagMode, ForceEngine, NumDimension} from '../../ds/panel_3dgraph'
import type { ForceGraphMethods , GraphData } from 'react-force-graph-3d'

const Section = ({ title }: { title: string }) => (
  <p className="text-xl text-gray-600 font-bold w-full border-b mt-2 pl-2">
    {title}
  </p>
)

export const Graph = ({data}: {
  data: GraphData
}): JSX.Element => {

  const isAdmin = useRole() === 'admin'
  console.log('client data: ', data)
  const fgRef = useRef<ForceGraphMethods>()
  const router  = useRouter()

  const { width, height } = useWindowDimensions()
  const [enableControl, setEnableControl] = useState(false)

  const [backgroundColor, backgroundColor_] = useColorOption('backgroundColor')

  const [showNavInfo, showNavInfo_] = useBooleanOption('showNavInfo', false)
  const [enableNodeDrag, enableNodeDrag_] = useBooleanOption('enableNodeDrag', true)
  const [enableNavigationControls, enableNavigationControls_] = useBooleanOption('enableNavigationControls', true)
  const [enablePointerInteraction, enablePointerInteraction_] = useBooleanOption('enablePointerInteraction', true)

  const [nodeOpacity, nodeOpacity_] = useNumberOption('nodeOpacity')
  const [nodeResolution, nodeResolution_] = useNumberOption('nodeResolution')
  const [nodeRelSize, nodeRelSize_] = useNumberOption('nodeRelSize')
  const [dagLevelDistance, dagLevelDistance_] = useNumberOption('dagLevelDistance')
  const [d3AlphaMin, d3AlphaMin_] = useNumberOption('d3AlphaMin')
  const [d3AlphaDecay, d3AlphaDecay_] = useNumberOption('d3AlphaDecay')
  const [d3VelocityDecay, d3VelocityDecay_] = useNumberOption('d3VelocityDecay')
  const [warmupTicks, warmupTicks_] = useNumberOption('warmupTicks')
  const [cooldownTicks, cooldownTicks_] = useNumberOption('cooldownTicks')
  const [cooldownTime, cooldownTime_] = useNumberOption('cooldownTime')
  const [linkHoverPrecision, linkHoverPrecision_] = useNumberOption('linkHoverPrecision')

  const [numDimensions, numDimensions_] = useSelectOption<NumDimension>('numDimensions', 3, NumDimensions)
  const [dagMode, dagMode_] = useSelectOption<DagMode>('dagMode', 'td', DagModes)
  const [forceEngine, forceEngine_] = useSelectOption<ForceEngine>('ForceEngine', 'd3', ForceEngines)

  return (
    <div className="w-full h-full flex">

      {
        isAdmin && (
                <button
                  type="button"
                  onClick={() => setEnableControl(!enableControl)}
                  className="z-10 fixed right-4 top-20 rounded-lg p-2 bg-primary text-white"
                >
        Control
                </button>
        )
      }

      <div className={clsx('w-64', enableControl || 'hidden')}>

        <Section title="Data Input"/>

        <button type="button" className="bg-primary text-white rounded-xl px-3 py-1 m-1"
          onClick={() => {
            router.push('/data_editor')
          }}
        >
          Data Source
        </button>

        <Section title="Container Layout"/>
        {backgroundColor_}
        {showNavInfo_}

        <Section title="Node Styling"/>
        {nodeRelSize_}
        {nodeOpacity_}
        {nodeResolution_}

        <Section title="Link Styling"/>

        <Section title="Force Engine"/>
        {forceEngine_}
        {dagLevelDistance_}
        {numDimensions_}
        {dagMode_}
        {d3AlphaMin_}
        {d3AlphaDecay_}
        {d3VelocityDecay_}
        {warmupTicks_}
        {cooldownTicks_}
        {cooldownTime_}

        <Section title="Interaction"/>
        {linkHoverPrecision_}
        {enableNodeDrag_}
        {enableNavigationControls_}
        {enablePointerInteraction_}

      </div>

      <ForceGraph3D
        ref={fgRef}

        // data
        graphData={data}

        // width & height, 用于确保屏幕高宽正好满足
        width={width - (enableControl ? 256 : 0)}
        height={height - 64}

        // layout
        backgroundColor={backgroundColor}
        showNavInfo={showNavInfo}

        // node
        nodeRelSize={nodeRelSize}
        nodeOpacity={nodeOpacity || 0}
        nodeResolution={nodeResolution || 0}
        nodeLabel="name"
        nodeThreeObject={({ id }) => {
          const imgPath = `/avatar/${id}`
          const imgTexture = new TextureLoader().load(imgPath)
          const material = new SpriteMaterial({ map: imgTexture, depthWrite: false })
          const img = new Sprite(material)
          img.scale.set(24, 24, 1)
          return img
        }}

        // link
        linkHoverPrecision={linkHoverPrecision}

        // force engine
        forceEngine={forceEngine}
        dagLevelDistance={dagLevelDistance || 0}
        numDimensions={numDimensions}
        dagMode={dagMode}
        d3AlphaMin={d3AlphaMin}
        d3AlphaDecay={d3AlphaDecay}
        d3VelocityDecay={d3VelocityDecay}
        warmupTicks={warmupTicks}
        cooldownTicks={cooldownTicks}
        cooldownTime={cooldownTime}

        // interaction
        enableNodeDrag={enableNodeDrag}
        enableNavigationControls={enableNavigationControls}
        enablePointerInteraction={enablePointerInteraction}
        onNodeClick={(node) => {

          const distance = 150 // the smaller distance, the bigger object in the camera
          const { x = 0, y = 0, z = 0 } = node
          const ratio = 1 - distance / Math.hypot(x, y, z) // <--- target ratio

          const newPos = x || y || z
            ? { x: x * ratio, y: y * ratio, z: z * ratio }
            : { x: 0, y: 0, z: distance } // special case if node is in (0,0,0)
          console.log({ x, y, z, ratio, newPos })

          // Aim at node from outside it
          fgRef.current?.cameraPosition(
            newPos, // new position
            { x, y, z }, // lookAt ({ x, y, z })
            2000  // ms transition duration
          )
        }}
      />
    </div>
  )
}

export default Graph
