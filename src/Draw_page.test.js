import React from 'react'
import { render } from '@testing-library/react'
import Draw_page from "./Draw_page"
import Benevolence_template from './Benevolence_template'
import charmPaper1 from './imgs/charmPaper1.png'
import charmPaper2 from './imgs/charmPaper2.png'
import charmPaper3 from './imgs/charmPaper3.png'
describe('Draw_page component', () => {
  it('renders with  result 0', () => {
    const { getByText } = render(<Draw_page result={0} />)
    const titleElement = getByText('讓動物多活一天')
    expect(titleElement).toBeInTheDocument
  })
  it('renders with result 1', () => {
    const { getByText } = render(<Draw_page result={1} />)
    const titleElement = getByText('惡靈退散')
    expect(titleElement).toBeInTheDocument
  })
  it('renders with result 2', () => {
    const { getByText } = render(<Draw_page result={2} />)
    const titleElement = getByText('節能減碳')
    expect(titleElement).toBeInTheDocument
  })
  it('renders nothing with unknown result', () => {
    const { container } = render(<Draw_page result={3} />)
    expect(container).toBeEmptyDOMElement
  })
})
