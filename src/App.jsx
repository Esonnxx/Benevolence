import { useState } from 'react'
import background from './imgs/giphy.gif'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import Ceremony from './Ceremony'
import Draw_page from './Draw_page'
import WriteSomeThing_page from './WriteSomeThing_page'
import Finished_page from './Finished_page'
import About from './Component/About'

function App() {
  const [buttonState, setButtonState] = useState(null)
  const [drawState, setDrawState] = useState(null)
  const [result, setResult] = useState(null)
  const [aboutBlock, setAboutBlock] = useState(null)

  const updateDrawState = (newDrawState, newResult) => {
    setDrawState(newDrawState)
    setResult(newResult)
  }
  const handleBtnState = (button) => {
    setButtonState(button)
    console.log(buttonState)
  }

  const handleAboutBtn = () => {
    setAboutBlock('isActived')
  }

  const handleTaskBlockState = (newState) => {
    if (newState === 'closed') {
      setAboutBlock(null)
    }
  }
  return (
    <div>
      <div
        className="min-h-screen w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
        }}>
        <div style={{ position: 'absolute', bottom: '6.75rem' }}>
          {buttonState !== 'isActive' && aboutBlock !== 'isActived' && (
            <button
              onClick={() => handleBtnState('isActive')}
              className=" h-14 w-40 bg-amber-400 
          text-white text-lg font-bold 
          py-1 px-2 rounded-full shadow-md">
              舉行善行儀式
            </button>
          )}
        </div>
        <div style={{ position: 'absolute', bottom: '3.25rem' }}>
          {buttonState !== 'isActive' && aboutBlock !== 'isActived' && (
            <button
              onClick={handleAboutBtn}
              className=" h-10 w-30 bg-white
          text-grey text-sm border-grey
            px-5 rounded-full shadow-md">
              關於善行靈堂
            </button>
          )}
        </div>
        {aboutBlock === 'isActived' && (
          <About setTaskBlockState={handleTaskBlockState} />
        )}
      </div>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              buttonState === 'isActive' ? (
                <Ceremony
                  drawState={drawState}
                  result={result}
                  updateDrawState={updateDrawState}
                />
              ) : null
            }
          />
          <Route
            path="/page1"
            element={
              drawState === 'drawActived' ? <Draw_page result={result} /> : null
            }
          />
          <Route
            path="/page1/writesomething"
            element={<WriteSomeThing_page result={result} />}
          />
          <Route
            path="/page1/writesomething/finished"
            element={<Finished_page />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
