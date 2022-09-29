import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import mediaBreak from '../styles/breakpoints'
import theme, { colors } from '../styles/light-theme'

// STYLED COMPONENTS
type Props = {
  thing?: any
  children?: any
  noheader?: boolean
}

const Container = styled.div<Props>`
  display: flex;
  position: absolute;
  width: 100%;
  /* border: 2px solid rebeccapurple; */
  //* Excludes header & footer
  height: ${props => props.noheader 
    ? 'calc(100% - 84px - 170px - 4px)' 
    : '100%'}; 
  box-sizing: border-box;
  overflow: auto;
  //* prevents scroll bar from affecting width on WebKit browsers
  overflow-y: overlay;
  
  ${mediaBreak.desktop} {
	}

  ${mediaBreak.laptop} {
	}

	${mediaBreak.tablet} {
	}
	
	${mediaBreak.mobile} {
    flex-direction: column;
	}
`
const PageContainer: React.FC<Props> = ({
  thing,
  children,
  noheader = true,
}: Props): JSX.Element => {
  return (
    <Container noheader={noheader} >
      {children}
    </Container>
  )
}

export default PageContainer