import React from 'react'
import candle from './imgs/candle.png'
import { useNavigate } from 'react-router-dom'

const Ceremony = ({ drawState, result, updateDrawState }) => {
  const navigate = useNavigate()
  const handleDrawAction = () => {
    const res = Math.floor(Math.random() * 3)
    console.log(drawState)
    console.log(result)
    updateDrawState('drawActived', res)
    navigate('/page1')
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
          <img
            style={candleStyle}
            src={candle}
            alt=""
            className="object-contain h-54 w-28"
          />
        </div>
        <div className="mt-4">
          <p className="text-xl text-white font-bold">善簽</p>
        </div>
        <div className="mt-20">
          <button
            onClick={handleDrawAction}
            className="text-sm text-stone-300 animate-blink">
            點擊抽取今日善行
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ceremony
