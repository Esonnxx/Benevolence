import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import UI_Template from './UI_Template'
import about_block_pic from '../imgs/about_block_pic.png'
const About = ({ setTaskBlockState }) => {
  const [closeState, setCloseState] = useState(null)

  const handleCloseAction = () => {
    setCloseState('enabled')
    setTaskBlockState('closed')
  }
  return (
    <div>
      <div
        className="w-full h-full bg-black 
    bg-opacity-50 absolute top-0 left-0 
    flex flex-col 
    items-center justify-center">
        <div className="flex z-20 absolute inset-0 flex item-center justify-center mt-28">
          <div className="w-3/4 h-3/4 bg-white border border-solid border-amber-400 rounded-2xl ">
            <div className="">
              <button onClick={handleCloseAction} className="text-gray-400">
                <AiOutlineClose className="-mt-2 h-10 w-16 absolute right-0 mr-12" />
              </button>
            </div>
            <div className="text-center pt-3 font-bold">
              <UI_Template title={'關於靈堂'} />
              <div className="mx-5 font">
                <p className="mt-5">
                  在善行靈堂中執行善行儀式可以獲得善根，善根可用於維持自身穩定，也可用於抵消報仇靈堂的業力。
                </p>
                <p className="mt-5">
                  透過抽籤獲得適宜的善行，並以誠心完成靈堂所派予的指事，將感受寫於抽取到的符咒上，最後上交符咒，便能完成儀式，獲得善根。
                </p>
                <img src={about_block_pic} alt="" />
              </div>

              <div className="flex justify-center mt-4 text-white">
                <button
                  onClick={handleCloseAction}
                  className="border-amber-400 rounded-3xl bg-amber-400 w-24 h-10 shadow-md">
                  我瞭解了
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
