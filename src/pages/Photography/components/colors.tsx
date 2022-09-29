import React from 'react'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

type Props = {
  title?: string
}
const Colors: React.FC<Props> = ({
  title,
}: Props): JSX.Element => {

  let colorsArray = Object.values(theme.colors)
  let colorsArrayNames = Object.keys(theme.colors)
  // console.log('themexxx', Object.values(theme.colors)[0])

  // theme.colors.map(x => console.log(x))
  return (
    <div
style={{
  display: 'flex',
  // flexDirection: 'column',
  
  flexWrap: 'wrap',
  width: '800px',
  // height: '80vh',
}}
>

{colorsArray.map((x, idx, arr) => 
<div
  key={idx}
  style={{
    width: '100px',
    minWidth: '100px',
    height: '100px',
    backgroundColor: `${x}`,
    color: idx !== 7 ? 'white' : 'black'
  }}
>
  {colorsArrayNames[idx]}
</div>
)}
</div>
  )
}

export default Colors


