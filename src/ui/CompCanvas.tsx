import React, { Fragment, useRef } from 'react'
import { Stage, Layer, Rect, Text, Image } from 'react-konva'
import { Html, Portal } from 'react-konva-utils'

// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri: string, name: string) {
  var link = document.createElement('a')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


const App = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const stageRef = useRef(null)


  const handleExport = () => {
    // @ts-ignore
    const uri = stageRef.current.toDataURL()
    console.log(uri)
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, 'stage.png')
  }

  return (
    <Fragment>
      <button onClick={handleExport}>Click here to log stage data URL</button>
      
      <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
        <Layer name={'xxx'}/>
        <Layer>

          <Portal selector={'.xxx'} enabled={true}>
            <Html
              divProps={{
                style: {
                  position: 'absolute',
                  top: 10,
                  left: 10,
                },
              }}
            >
              <div> 蔡诗瑜你吃了什么好吃的</div>
              <input placeholder="DOM input from Konva nodes"/>
            </Html>
          </Portal>


          <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill="red"
            shadowBlur={5}
          />
        </Layer>

      </Stage>
    </Fragment>
  )
}

export default App

