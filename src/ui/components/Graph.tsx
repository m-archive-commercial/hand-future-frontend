import { ReactNode, useRef, useState } from 'react'
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d'
import { Sprite, SpriteMaterial, TextureLoader } from 'three'
import data from '../../../public/avatar/index.json'
import clsx from 'clsx'
import useWindowDimensions from '../../hooks/window'

type ForceEngine = 'd3' | 'ngraph';
const ForceEngines: ForceEngine[] = ['d3', 'ngraph']

type NumDimension = 1 | 2 | 3
const NumDimensions: NumDimension[] = [1, 2, 3]

type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'zout' | 'zin' | 'radialout' | 'radialin';
const DagModes: DagMode[] = ['td', 'bu', 'lr', 'rl', 'zout', 'zin', 'radialout', 'radialin']

export interface GraphOptions {
  // Data Input

  // Container Layout
  backgroundColor?: string
  showNavInfo?: boolean

  // Node Styling
  nodeRelSize?: number
  nodeOpacity?: number
  nodeResolution?: number

  // Link Styling
  linkOpacity?: number;
  linkResolution?: number;
  linkDirectionalParticleResolution?: number;

  // Force engine (d3-force) configuration
  forceEngine?: ForceEngine;
  numDimensions?: 1 | 2 | 3;
  dagMode?: DagMode;
  dagLevelDistance?: number | null;
  d3AlphaMin?: number;
  d3AlphaDecay?: number;
  d3VelocityDecay?: number;
  ngraphPhysics?: object;
  warmupTicks?: number;
  cooldownTicks?: number;
  cooldownTime?: number;

  // Interaction
  linkHoverPrecision?: number;
  enableNodeDrag?: boolean;
  enableNavigationControls?: boolean;
  enablePointerInteraction?: boolean;
}


export const Graph = () => {

  const fgRef = useRef<ForceGraphMethods>()
  const { width, height } = useWindowDimensions()

  const lineClass = 'w-full inline-flex'
  const labelClass = 'px-2 w-52 shrink-0'
  const inputClass = 'flex-1 min-w-0 max-w-[48px]'

  const useBooleanOption = (label: string, init: boolean | undefined = undefined): [boolean | undefined, ReactNode] => {
    const [val, setVal] = useState<boolean | undefined>(init)
    console.log({ val })
    return [
      val,
      <label key={label} className={lineClass}>
        <span className={labelClass}>{label}</span>
        <input className={inputClass} type={'checkbox'} checked={val} onChange={() => setVal(val !== true)}/>
      </label>
    ]
  }

  const useNumberOption = (label: string, init: number | undefined = undefined): [number | undefined, ReactNode] => {
    const [val, setVal] = useState<number | undefined>(init)
    console.log({ val })
    return [
      val,
      <label key={label} className={lineClass}>
        <span className={labelClass}>{label}</span>
        <input className={inputClass} type={'number'} value={val} onChange={(v) => {
          setVal(v.currentTarget.valueAsNumber)
          fgRef.current?.refresh()
        }}/>
      </label>
    ]
  }

  const useSelectOption = <T extends string | number, >(label: string, init: T, choices: T[]): [T, ReactNode] => {
    const [val, setVal] = useState<T>(init)
    console.log({ val })
    return [
      val,
      <label key={label} className={lineClass}>
        <span className={labelClass}>{label}</span>
        <select className={inputClass}
                defaultValue={init} onChange={(e) => {setVal(choices[e.target.selectedIndex])}}>
          {choices.map((choice) => (
            <option key={choice} value={choice}>{choice}</option>
          ))}
        </select>
      </label>
    ]
  }

  const useColorOption = (label: string, init = undefined): [string | undefined, ReactNode] => {
    const [val, setVal] = useState<string | undefined>(init)

    return [
      val,
      <label key={label} className={lineClass}>
        <span className={labelClass}>{label}</span>
        <input className={inputClass} type={'color'} value={val} onChange={(v) => setVal(v.currentTarget.value)}/>
      </label>
    ]
  }

  const [enableControl, setEnableControl] = useState(false)

  const [backgroundColor, backgroundColor_] = useColorOption('backgroundColor')

  const [showNavInfo, showNavInfo_] = useBooleanOption('showNavInfo')
  const [enableNodeDrag, enableNodeDrag_] = useBooleanOption('enableNodeDrag')
  const [enableNavigationControls, enableNavigationControls_] = useBooleanOption('enableNavigationControls')
  const [enablePointerInteraction, enablePointerInteraction_] = useBooleanOption('enablePointerInteraction')

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


  const Section = ({ title }: { title: string }) => <p
    className={'text-xl text-gray-600 font-bold w-full border-b mt-2 pl-2'}>{title}</p>

  return (
    <div className={'w-full h-full flex'}>

      <button
        onClick={() => setEnableControl(!enableControl)}
        className={'z-10 fixed right-4 top-20 rounded-lg p-2 bg-primary text-white'}
      >
        Control
      </button>

      <div className={clsx('w-64', enableControl || 'hidden')}>

        <Section title={'Data Input'}/>

        <Section title={'Container Layout'}/>
        {backgroundColor_}
        {showNavInfo_}

        <Section title={'Node Styling'}/>
        {nodeRelSize_}
        {nodeOpacity_}
        {nodeResolution_}

        <Section title={'Link Styling'}/>

        <Section title={'Force Engine'}/>
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

        <Section title={'Interaction'}/>
        {linkHoverPrecision_}
        {enableNodeDrag_}
        {enableNavigationControls_}
        {enablePointerInteraction_}

      </div>

      <ForceGraph3D
        width={width - (enableControl ? 256 : 0)}
        height={height - 64}
        backgroundColor={backgroundColor}
        nodeRelSize={nodeRelSize}
        nodeOpacity={nodeOpacity || 0}
        nodeResolution={nodeResolution || 0}
        dagLevelDistance={dagLevelDistance || 0}
        numDimensions={numDimensions}
        dagMode={dagMode}
        d3AlphaMin={d3AlphaMin}
        d3AlphaDecay={d3AlphaDecay}
        d3VelocityDecay={d3VelocityDecay}
        warmupTicks={warmupTicks}
        cooldownTicks={cooldownTicks}
        cooldownTime={cooldownTime}
        linkHoverPrecision={linkHoverPrecision}
        showNavInfo={showNavInfo}
        enableNodeDrag={enableNodeDrag}
        enableNavigationControls={enableNavigationControls}
        enablePointerInteraction={enablePointerInteraction}
        forceEngine={forceEngine}

        ref={fgRef}
        graphData={data}
        nodeLabel={'name'}
        nodeThreeObject={({ id }) => {
          const imgPath = `/avatar/${id}`
          const imgTexture = new TextureLoader().load(imgPath)
          const material = new SpriteMaterial({ map: imgTexture, depthWrite: false })
          const img = new Sprite(material)
          img.scale.set(24, 24, 1)
          return img
        }}

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
