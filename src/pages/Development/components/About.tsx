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
        Driven, creative, and <span>results-oriented</span> Software Developer committed to integrity with a penchant for finding
        <span> solutions</span> to complex challenges. A lifelong student that is engaged by <span>growth</span> with a <span>bias for action</span> that
        consistently makes efforts to improve; eager to integrate with an <span>innovative</span> team that fosters an environment
        of support and development. In previous roles, streamlined production processes and mentored aspiring
        professionals while delivering products with <span>exceptional</span> outcomes.
      </Content>
      <Content>
        If you are looking for a highly motivated individual to join your team, I would love to <Special>hear from you!</Special>
      </Content> 
      <Content>
       <Resume download>Curriculum vitae</Resume>
      </Content> 
    </>
  )
}

export default About