import React from 'react'

// ICONS
import Icon from './Icon'

// CONSTANTS
import { Icons } from '../constants/Icons'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'
import { Links } from '../constants/Links'

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  background-color: ${theme.colors.primary};
  font-size: ${theme.fonts.sizes.xxlarge};
  color: ${theme.colors.primary};

  ${mediaBreak.desktop} {
    font-size: ${theme.fonts.sizes.xxlarge};  
    padding: 1.2rem 2.5rem;
	}

  ${mediaBreak.laptop} {
    font-size: ${theme.fonts.sizes.xxlarge};  
    padding: 1.2rem 2rem;
	}

	${mediaBreak.tablet} {
    font-size: ${theme.fonts.sizes.xxlarge};  
    padding: 1rem 2rem;
	}
	
	${mediaBreak.mobile} {
    font-size: ${theme.fonts.sizes.xlarge};  
    padding: 1rem 1.5rem;
	}
`
const Contact = styled.a.attrs({
  title: `${Icons.EMAIL}`, 
  href: 'mailto:wdrgrs@gmail.com',
  target: '_blank',
  rel: 'noreferrer',
})`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.families.barlow};
  font-weight: ${theme.fonts.weights.xlight};
  font-size: ${theme.fonts.sizes.xxlarge};  
  opacity: .8;
  font-variant: small-caps;

  &:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: ${theme.fonts.weights.light};
  }

  ${mediaBreak.desktop} {
	}

  ${mediaBreak.laptop} {
	}

	${mediaBreak.tablet} {
	}
	
	${mediaBreak.mobile} {
    font-size: ${theme.fonts.sizes.xlarge};  
	}
`
const IconContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.primary};
  gap: 1.5rem;
`

type Props = {
  title?: string
  page?: string
}
const Footer: React.FC<Props> = ({
  title,
  page,
}:Props): JSX.Element => {
  return (
    <Container>
      <Contact>Contact</Contact>
      <IconContainer>
        <Icon type={Icons.LINKEDIN} link={Links.LINKEDIN} />
        <Icon type={Icons.GITHUB} link={Links.GITHUB} />
        <Icon type={Icons.INSTAGRAM} color={theme.colors.primary} link={Links.INSTAGRAM} />
      </IconContainer>
    </Container>
  )
}

export default Footer