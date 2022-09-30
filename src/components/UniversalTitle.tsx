import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'

// STYLED COMPONENTS
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${theme.spacing.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  -webkit-text-stroke-width: .03rem;
  -webkit-text-stroke-color: ${theme.colors.secondarypop};
  /* font-size: 2rem; */
  /* border: 2px solid blue; */
  /* box-sizing: border-box; */
`
const Title = styled.h1`
  font-family: ${theme.fonts.families.cinzel};
`
const SubTitle = styled.h2`
`
type Props = {
  title?: string
  subtitle?: string
}
const UniversalTitle: React.FC<Props> =({
  title,
  subtitle,
}: Props): JSX.Element => {
  return (
    <TitleContainer>
      <Title>
        {title}
      </Title>
      {!!subtitle && 
        <SubTitle>
          {subtitle}
        </SubTitle>
      }
    </TitleContainer>
  )
}

export default UniversalTitle