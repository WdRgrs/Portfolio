import React, { useEffect, useState } from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'

const LocalNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 1rem 2rem;
  box-sizing: border-box;
  width: 100%;
`

const TitleContainer = styled.div`
  display: flex;
  /* align-items: flex-end; */
  align-self: flex-start;
  gap: 2.5em;
  margin-bottom: 1rem;
  max-width: calc(100% - 2rem);
`
type TitleProps = {
  underline?: number
}
const Title = styled.div<TitleProps>`
  font-family: ${theme.fonts.families.poppins};
  font-weight: ${theme.fonts.weights.book};
  font-size: ${theme.fonts.sizes.xlarge};
  display: flex;
  font-variant: small-caps;
  width: fit-content;
  transition-duration: .8s;
  transition-property: all;
  transform-origin: 0 1rem;
  opacity: .65;

  /* &:nth-child(1) {
    transform-origin: 0 1rem;
  } */
  
  &:nth-child(${props => props.underline}) {
    transform: scale(1.2);
    opacity: 1;
    text-decoration: underline;
  }

  &:not(:nth-child(1)) {
    transform-origin: 1.4rem;
  }

  &:not(:nth-child(${props => props.underline})):hover {
    cursor: pointer;
    opacity: .8;
    transform: scale(1.1);
  }

  ${mediaBreak.desktop} {
	}

  ${mediaBreak.laptop} {
	}

	${mediaBreak.tablet} {
	}
	
	${mediaBreak.mobile} {

	}
`
const Content = styled.div`
  font-family: ${theme.fonts.families.poppins};
  font-weight: 300;
  box-sizing: border-box;
  max-width: calc(3 * (345px + 1rem) - 1rem + 4px);

	${mediaBreak.mobile} {
    max-width: calc(100% - 2rem);
  }
`
type Props = {
  titleOptions: string[]
  firstContent?: any
  secondContent?: any
  thirdContent?: any
}
const LocalNav: React.FC<Props> = ({
  titleOptions,
  firstContent,
  secondContent,
  thirdContent,
}: Props): JSX.Element => {
  const [index, setIndex] = useState<number>(0)

  return (
    <LocalNavContainer>
      <TitleContainer>
        {titleOptions
          .map((title, idx) => (
            <Title 
              onClick={() => setIndex(idx)} 
              key={idx}
              underline={index + 1}
            >
              {title}
            </Title>
        ))}
      </TitleContainer>
      <Content>
        {index === 0 && firstContent}
        {index === 1 && secondContent}
        {index === 2 && thirdContent}
      </Content>
    </LocalNavContainer>
  )
}

export default LocalNav