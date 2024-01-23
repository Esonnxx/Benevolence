import React, { useState } from 'react'
import UI_Template from './UI_Template'
import { AiOutlineClose } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Task_block = ({ title, img, setTaskBlockState }) => {
  const navigate = useNavigate()
  const [btnState, setCloseState] = useState(null)

  const handleCloseAction = () => {
    setCloseState('enabled')
    console.log(btnState)
    setTaskBlockState('enabled')
  }
  const handleStartBtn = () => {
    navigate('/page1/writesomething', { state: { title, img } })
  }

  let content1
  let content2 = '完成後在符紙上寫下你的感覺，即完成善行儀式。'
  {
    if (title === '讓動物多活一天')
      content1 =
        '下一餐選擇吃素吧!為環境做一份善事。在下一份餐點中，不要食用任何的肉類，或試圖吃雞汁口味的薯片。'
    else if (title === '惡靈退散')
      content1 =
        '擊退身邊的惡靈!試著用最醜的表情大哭五秒，再哈!哈!哈!用力大笑五秒，方圓五公尺的惡靈就會灰飛湮滅，傷害不了別人了。'
    else
      content1 =
        '拆下離你最近的冷氣濾網並清洗乾淨，減少能源的消耗。禁止使用任何刷具，用你的手溫柔清潔它。'
  }
  return (
    <div className="flex z-20 absolute inset-0 flex item-center justify-center mt-28">
      <div className="w-3/4 h-3/4 bg-white border border-solid border-amber-400 rounded-2xl ">
        <div className="">
          <button onClick={handleCloseAction} className="text-gray-400">
            <AiOutlineClose className="h-10 w-16 absolute right-0 mr-12" />
          </button>
        </div>
        <div className="text-center pt-8 font-bold">
          <div className="text-xs text-amber-400">
            <p>今日善行</p>
          </div>
          <div className="w-28 mx-auto mt-4">
            <img src={img} alt="" />
          </div>
          <div>
            <p>{title}</p>
          </div>
          <UI_Template title={"儀式方法"}/>
          <div className="text-sm mt-3 px-6 leading-7">
            <p>{content1}</p>
          </div>
          <div className="text-2xl text-amber-400 mt-1 flex justify-center">
            <FiChevronDown />
          </div>
          <div className="text-sm mt-1 px-6 leading-7">
            <p>{content2}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleStartBtn}
              className="border-amber-400 rounded-3xl bg-amber-400 w-24 h-10 shadow-md">
              開始
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task_block
