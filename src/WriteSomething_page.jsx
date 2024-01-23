import React from 'react'
import charmPaper1 from './imgs/charmPaper1.png'
import charmPaper2 from './imgs/charmPaper2.png'
import charmPaper3 from './imgs/charmPaper3.png'
import { useNavigate } from 'react-router-dom'

const WriteSomeThing_page = ({ result }) => {
  const navigate = useNavigate()
  let title
  let resultToContent
  let resultToImg
  const handleFinishBtn = () => {
    navigate('/page1/writesomething/finished')
  }

  {
    switch (result) {
      case 0: {
        title = '讓動物多活一天'
        resultToContent =
          '在下一份餐點中，不要食用任何的肉類，或試圖吃雞汁口味的薯片。完成後在符紙上寫下你的感覺，即完成善行儀式。'

        resultToImg = charmPaper1
        break
      }
      case 1: {
        title = '惡靈退散'
        resultToContent =
          '試著用最醜的表情大哭五秒，再大笑五秒，讓方圓五公尺的惡靈就會灰飛湮滅。完成後在符紙上寫下你的感覺，即完成善行儀式。'

        resultToImg = charmPaper2
        break
      }
      case 2: {
        title = '節能減碳'
        resultToContent =
          '拆下離你最近的冷氣濾網並清洗乾淨，並禁止使用任何刷具，用你的手溫柔清潔它。完成後在符紙上寫下你的感覺，即完成善行儀式。'

        resultToImg = charmPaper3
        break
      }
      default: {
        title = null
        resultToContent = null
        resultToImg = null
      }
    }
  }

  return (
    <div>
      <div
        className="w-full h-full bg-black 
      bg-opacity-50 absolute top-0 left-0 
      flex flex-col 
      items-center justify-center">
        <p className=" text-white">*執行善行時請勿離開靈堂*</p>
        <p className=" pt-8 text-amber-400 font-bold">今日善行</p>
        <p className=" pt-4 text-l text-white">{title}</p>
        <p className="mx-10 text-white">{resultToContent}</p>
        <div style={{ position: 'relative' }}>
          <img src={resultToImg} alt="" className="scale-100 opacity-80" />

          <input
            type="text"
            placeholder="寫下第一個感覺"
            className="w-56 h-20 absolute border border-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-solid z-1 rounded-xl"
          />
        </div>
        <div className="flex justify-center mt-4 text-white">
          <button
            onClick={handleFinishBtn}
            className="border-amber-400 rounded-3xl bg-amber-400 w-20 h-12 shadow-md">
            完成
          </button>
        </div>
      </div>
    </div>
  )
}
export default WriteSomeThing_page
