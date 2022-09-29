import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'

// STYLED COMPONENTS
type Props = {
  mouse?: boolean
  opac?: boolean
  onClick?: () => any
}

const Overlay = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    to top,
    ${theme.colors.primary},
    ${theme.colors.secondaryhalf}
  );
  opacity: .3;
  transition-duration: .3s;
 
  &:hover {
    cursor: ${props => props.mouse ? 'pointer' : 'default'};
    opacity: ${props => props.opac ? '0' : ''};
  }
`

const ImageOverlay: React.FC<Props> = ({
  mouse = false,
  opac = false,
  onClick,

}: Props): JSX.Element => {
  return (
    <Overlay 
      mouse={mouse} 
      opac={opac} 
      onClick={onClick} 
    />
  )
}

export default ImageOverlay