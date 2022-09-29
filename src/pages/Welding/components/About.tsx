import React from 'react'

// COMPONENTS
import StyledLink from '../../../components/StyledLink'

// CONSTANTS
import { Icons } from '../../../constants/Icons'

// STYLES
import styled from '../../../styles/styled-components'
import theme from '../../../styles/light-theme'
import mediaBreak from '../../../styles/breakpoints'


const Content = styled.div`
  font-family: ${theme.fonts.families.poppins};
  font-size: ${theme.fonts.sizes.large};
  font-weight: ${theme.fonts.weights.medium};
  margin-bottom: 1rem;
  color: ${theme.colors.mediumgrey};

  span {
    font-family: ${theme.fonts.families.poppins};
    font-weight: 600;
    color: ${theme.colors.secondary};
  }
`
const SuperLink = styled.a`
  cursor: pointer;
  position: relative;
  font-family: ${theme.fonts.families.poppins};
  font-weight: 600;
  color: ${theme.colors.accentorange};
  transition-duration: .2s;

  &:after {
    content: '';
    position: absolute;
    bottom: 2.5px;
    left: 0;
    border-bottom: 1px solid ${theme.colors.accentorange};
    height: 4px;
    width: 96%;
  }

  &:hover {
    color: ${theme.colors.secondarypop};
  } 
  
  &:hover:after {
    border-bottom: 1px solid ${theme.colors.secondarypop};
  }
`
const Special = styled(SuperLink).attrs({
  title: `${Icons.EMAIL}`, 
  href: 'mailto:wdrgrs@gmail.com',
  target: '_blank',
  rel: 'noreferrer',
})``
const Resume = styled(SuperLink).attrs({
  title: `download ${Icons.RESUME} .pdf`, 
  href: '../../../assets/WadeRogers.pdf',
})`
  /* position: absolute;
  bottom: 4rem; */

  &:after {
    width: 100%;
  }
`
const About: React.FC = (): JSX.Element => {
  return (
    <>
      <Content>
        My first Career as a welder and pipefiiter took me from coast to coast and even for a stint down to the bahamas.  Copy, pictures and projects to be updated soon!  Currently in the process of building out this portion fo the website.
      </Content> 
    </>
  )
}

export default About