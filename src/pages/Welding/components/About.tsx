import React from 'react'

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
    font-weight: ${theme.fonts.weights.medbold};
    color: ${theme.colors.secondary};
  }
`


const About: React.FC = (): JSX.Element => {
  return (
    <>
      <Content>
        My first Career as a welder and pipefiiter took me from coast to coast and even for a stint down to the Bahamas.  Copy, pictures and projects to be updated soon!  Currently in the process of building out this portion of the website.
      </Content> 
    </>
  )
}

export default About