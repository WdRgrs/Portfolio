import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'

type Props = {
  title: string
}
const MiniNav: React.FC<Props> = ({
  title,
}: Props): JSX.Element => {
  return (
    <div>MiniNav</div>
  )
}

export default MiniNav