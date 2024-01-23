import React from 'react'
import { useState } from 'react'
import Task_block from './Component/Task_block'

const Benevolence_template = ({ title, img }) => {
  const [buttonState, setButtonState] = useState(null)

  const handleDrawAction = () => {
    setButtonState('enabled')
    console.log(buttonState)
  }

  const handleTaskBlockState = (newState) => {
    if (newState === 'enabled') {
      setButtonState(null)
    }
  }

  const candleStyle = {
    marginTop: '50px',
  }
  return (
    <div>
      <div
        className="w-full h-full bg-black 
      bg-opacity-50 absolute top-0 left-0 
      flex flex-col 
      items-center justify-center">
        <div>
          {buttonState !== 'enabled' && (
            <img
              style={candleStyle}
              src={img}
              alt=""
              className="object-contain h-46 w-38"
            />
          )}
        </div>
        <div className="mt-4">
          <p className="text-xl text-white font-bold">{title}</p>
        </div>
        <div className="mt-20">
          {buttonState !== 'enabled' && (
            <button
              onClick={handleDrawAction}
              className="text-sm text-stone-300 animate-blink">
              點擊執行今日善行
            </button>
          )}
        </div>
      </div>
      {buttonState === 'enabled' && (
        <Task_block
          title={title}
          img={img}
          setTaskBlockState={handleTaskBlockState}
          style={{ position: 'absolute', zIndex: 20 }}
        />
      )}
    </div>
  )
}

export default Benevolence_template
