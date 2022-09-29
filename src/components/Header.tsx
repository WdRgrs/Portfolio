import React from 'react'

// COMPONENTS
import HeaderNavBar from './HeaderNavBar'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 6rem;
  background-color: ${theme.colors.secondaryhalf};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.sizes.xxxlarge};
  
  ${mediaBreak.desktop} {
    padding: 2rem 4rem;
    font-size: ${theme.fonts.sizes.xxlarge};
	}
  
  ${mediaBreak.laptop} {
    padding: 2rem 3rem;
    font-size: ${theme.fonts.sizes.xxlarge};
	}
  
	${mediaBreak.tablet} {
    font-size: ${theme.fonts.sizes.xxlarge};
    padding: 2rem 3rem;
	}
	
	${mediaBreak.mobile} {
    display: flex;
    flex-direction: column;
    padding: .5rem;
	}
`
const Title = styled.h1`
  display: flex;
  position: relative;
  font-size: ${theme.fonts.sizes.xxxxlarge};
  font-family: ${theme.fonts.families.barlow};
  font-weight: ${theme.fonts.weights.light};
  margin: 2rem;
  /* font-variant: small-caps; */
  
  ${mediaBreak.desktop} {
    font-size: ${theme.fonts.sizes.xxxlarge};
	}
  ${mediaBreak.laptop} {
    font-size: ${theme.fonts.sizes.xxlarge};
    margin: 1rem;
	}
  
	${mediaBreak.tablet} {
    margin: 0;
    font-size: ${theme.fonts.sizes.xlarge};
	}
	
	${mediaBreak.mobile} {
    font-size: ${theme.fonts.sizes.xxlarge};
    order: 2;
	}
`
type Props = {
  title: string
  page: string
}
const Header: React.FC<Props> = ({
  title,
  page,
}:Props): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <HeaderNavBar page={page} />
    </Container>
  )
}

export default Header