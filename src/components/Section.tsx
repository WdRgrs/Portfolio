import React from 'react'
// TODO: STYLING NEEDS WORK
// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'

// STYLED COMPONENTS
const Section = styled.div`
  margin-bottom: 2rem;
  box-sizing: border-box;
`
type Props = {
  children?: any
}
const PageContainer: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {
  return (
    <Section>
      {children}
    </Section>
  )
}

export default PageContainer