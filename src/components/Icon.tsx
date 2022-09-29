import React from 'react'

// CONSTANTS
import { Icons } from '../constants/Icons'
import { Links } from '../constants/Links'

// ICONS
import { BsYoutube, BsFillCameraFill } from "react-icons/bs"
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai"
import { GrLinkedin } from "react-icons/gr"
import { FaLaptopCode } from "react-icons/fa"
import { ImFire } from "react-icons/im"
import { IoHome, IoCloseSharp } from "react-icons/io5"

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'

// STYLED COMPONENTS
interface Props {
  type?: string
  link?: string
  color?: string
  size?: number
  header?: boolean
}

const IconLink = styled.a<Props>`
  ${props => css`
    position: ${props.header ? 'absolute' : 'inherit'};  
    bottom: ${props.header ? '-.4rem' : ''}; 
    left: ${props.header ? '1rem' : ''}; 
  `}
  transition-duration: 1.8s;
  transition-property: all;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);
    transition-duration: .8s;
    transition-property: all;
  }
`
const IconWrapper = styled.div<Props>`
  ${props => css`
    position: ${props.header ? 'absolute' : 'inherit'};  
    bottom: ${props.header ? '-.4rem' : ''}; 
    left: ${props.header ? '1rem' : ''}; 
  `}
  transition-duration: 1.8s;
  transition-property: all;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);
    transition-duration: .8s;
    transition-property: all;
  }
`
const defaultSize = 1
const instagramStyle = {
  borderRadius: '7px',
  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
}

export const IconType: React.FC<Props> = ({
  type,
  color,
  size = defaultSize,
  header = false,
}: Props): JSX.Element => {
  switch (type) {
    case Icons.LINKEDIN:
      return <GrLinkedin color={color || '#0e76a8'} size={`${size}em`} />
    case Icons.GITHUB:
      return <AiOutlineGithub color={color || 'purple'} size={`${size}em`} />
    case Icons.YOUTUBE:
      return <BsYoutube color={color || 'red'} size={`${size}em`} />
    case Icons.INSTAGRAM:
      return <AiOutlineInstagram style={instagramStyle} color={color || `${theme.colors.lightestgrey}`} size={`${size}em`} />
    case Icons.DEVELOPMENT:
      return (
        <IconWrapper header={header}>
          <FaLaptopCode color={color || `${theme.colors.lightestgrey}`} size={`${size}em`} />
        </IconWrapper>
      )
    case Icons.WELDING:
      return (
        <IconWrapper header={header}>
          <ImFire color={color || `${theme.colors.lightestgrey}`} size={`${size}em`} />
        </IconWrapper>
      )
    case Icons.PHOTOGRAPHY:
      return (
        <IconWrapper header={header}>
          <BsFillCameraFill color={color || `${theme.colors.lightestgrey}`} size={`${size}em`} />
        </IconWrapper>
      )
    case Icons.LANDING:
      return (
        <IconWrapper header={header}>
          <IoHome color={color || `${theme.colors.lightestgrey}`} size={`${size}em`} />
        </IconWrapper>
      )
    case Icons.CLOSE:
      return <IoCloseSharp color={color || `${theme.colors.primary}`} size={`${size}em`} />
    default:
      return <div></div>    
  }
}


const Icon: React.FC<Props> = ({
  type,
  link,
  color,
  size = defaultSize,
  header = false,
}: Props): JSX.Element => {
  return (
    <IconLink 
      href={link} 
      title={type} 
      target='_blank'
      rel='noreferrer'
      >
      <IconType 
        type={type}
        color={color}
        size={size}
        header={header}
      />
    </IconLink>
  )
}

export default Icon


