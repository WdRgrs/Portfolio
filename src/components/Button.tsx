import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'

const ButtonDiv = styled.button`
  border: 2px solid ${colors.primary};
`
type Props = {
  text?: string
}
const Button: React.FC<Props> = ({
  text
}: Props): JSX.Element => {

  return (
    <ButtonDiv>
      {text}
    </ButtonDiv>
  )
}

export default Button