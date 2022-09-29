import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// PAGES
import { Pages } from '../constants/Pages'

// ICONS
import Icon, { IconType } from './Icon'

// CONSTANTS
import { Icons } from '../constants/Icons'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  transform: translate(0, .2rem);

  ${mediaBreak.desktop} {
	}

  ${mediaBreak.laptop} {
	}

	${mediaBreak.tablet} {
	}
	
	${mediaBreak.mobile} {
	}
`
type ArrowProps = {
  active?: boolean
}

const ArrowUp = styled.div<ArrowProps>`
  position: relative;
  margin: -.82rem;
  width: 4rem;
  height: 3.5rem;
  background: ${theme.colors.primary};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: ${props => props.active ? 1 : .5};
  transition-duration: .8s;
  transition-property: opacity, transform;

  & div {
    opacity: ${props => props.active ? 1 : .05};
  }

  &:hover {
    cursor: pointer;
    opacity: .9;
    transform: scale(1.2) translate(0, -.2rem);

    &:hover div {
      opacity: .8;
    /* transform: scale(1); */
    }
  }

  ${mediaBreak.desktop} {
    width: 3.2rem;
    height: 2.8rem;
    margin: -.72rem;
	}

  ${mediaBreak.laptop} {
    width: 3.2rem;
    height: 2.8rem;
    margin: -.72rem;  
	}

	${mediaBreak.tablet} {
    width: 2.8rem;
    height: 2.45rem;
    margin: -.62rem;  
	}
	
	${mediaBreak.mobile} {
    margin: 1rem -.3rem 0;
	}
`

const ArrowDown = styled(ArrowUp)`
  transform: rotate(180deg) translate(0, .4rem);

  & div {
    transform: rotate(180deg) translate(0, .5rem);
  }
  
  &:hover {
    transform: scale(1.25) rotate(180deg) translate(0, .2rem);
  }
  &:hover div {
    transform: rotate(180deg) translate(0, .5rem);
  }
`

type Props = {
  page?: string
}
const HeaderNav: React.FC<Props> = ({
  page,
}: Props): JSX.Element => {

  return (
    <Container>
      <Link to={`/${Pages.DEVELOPMENT}`}>
        <ArrowUp 
          active={page === Pages.DEVELOPMENT ? true : false}
        >
          <IconType type={Icons.DEVELOPMENT} header />
        </ArrowUp>
      </Link>
      <Link to={`/${Pages.WELDING}`}>
        <ArrowDown 
          active={page === Pages.WELDING ? true : false}
        >
          <IconType type={Icons.WELDING} header />
        </ArrowDown>
      </Link>
      <Link to={`/${Pages.PHOTOGRAPHY}`}>
        <ArrowUp 
          active={page === Pages.PHOTOGRAPHY ? true : false} 
        >
        <IconType type={Icons.PHOTOGRAPHY} header />
      </ArrowUp>
      </Link>
      <Link to={`/${Pages.LANDING}`}>
        <ArrowDown 
          active={page === Pages.LANDING ? true : false}
        >
          <IconType type={Icons.LANDING} header />
        </ArrowDown> 
      </Link>
    </Container>
  )
}

export default HeaderNav
