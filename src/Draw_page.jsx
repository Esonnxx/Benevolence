import React, { useState } from 'react'
import Benevolence_template from './Benevolence_template'
import charmPaper1 from './imgs/charmPaper1.png'
import charmPaper2 from './imgs/charmPaper2.png'
import charmPaper3 from './imgs/charmPaper3.png'

const Draw_page = ({ result }) => {
  let componentToRender
  {
    switch (result) {
      case 0:
        componentToRender = (
          <Benevolence_template title={'讓動物多活一天'} img={charmPaper1} />
        )
        break
      case 1:
        componentToRender = (
          <Benevolence_template title={'惡靈退散'} img={charmPaper2} />
        )
        break
      case 2:
        componentToRender = (
          <Benevolence_template title={'節能減碳'} img={charmPaper3} />
        )
        break
      default:
        componentToRender = null
    }
  }
  return <>{componentToRender}</>
}

export default Draw_page
