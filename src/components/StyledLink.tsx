import React from 'react'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'

// STYLED COMPONENTS
type Props = {
  href?: string
  text?: string
  title?: string
  target?: string
  font?: string 
  size?: string 
  color?: string 
  variant?: boolean
}

const LinkStyle = styled.a<Props>`
  ${props => css`
    font-family: ${props.font ? props.font : 'Arial'};
    font-size: ${props.size ? props.size : '1rem'};
    font-variant: ${props.variant ? 'small-caps' : 'normal'};
  `}

  background-image: linear-gradient(
    to right,
    ${theme.colors.secondary},
    ${theme.colors.secondary} 50%,
    ${props => props.color ? props.color : theme.colors.primary} 50%
  );
  font-weight: ${theme.fonts.weights.book};
  background-size: 200% 100%;
  background-position: -100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: '';
    background: ${theme.colors.secondaryhalf};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;

  }

  &:hover {
    cursor: pointer;
    background-position: 0;
    
  }

  &:hover::before {
    width: 100%;
  }
  
`

const StyledLink: React.FC<Props> = ({
  text,
  title,
  href,
  font,
  size,
  color,
  variant = false,
  target = '_blank',
}: Props): JSX.Element => {
  return (
    <LinkStyle
      href={href}
      font={font}
      size={size}
      color={color}
      variant={variant}
      title={title}
      target={target}
    >
      {text}
    </LinkStyle>
  )
}

export default StyledLink