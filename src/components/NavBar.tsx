import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'

type Props = {
  thing: any
}
const NavBar: React.FC<Props> = ({
  thing,
}: Props): JSX.Element => {
  return (
    <div>NavBar</div>
  )
}

export default NavBar