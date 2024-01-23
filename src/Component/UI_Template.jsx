import React from 'react'

const UI_Template = ({ title }) => {
  return (
    <div className="mt-4 text-center">
      <div className=" flex mt-4 ">
        <div className=" flex-auto mt-2 ml-4 h-0 border-solid border border-amber-400 w-1/3"></div>
        <div className=" mt-1 border-solid border-amber-400 border w-2 h-2 rotate-45"></div>
        <div className="mx-4 w-28">
          <p className="mx-2 text-amber-400 text-sm font-bold">{title}</p>
        </div>
        <div className=" mt-1 border-solid border-amber-400 border w-2 h-2 rotate-45"></div>
        <div className=" flex-auto mt-2 mr-4 h-0 border-solid border border-amber-400 w-1/3"></div>
      </div>
    </div>
  )
}

export default UI_Template
