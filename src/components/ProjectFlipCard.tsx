import React, { useState } from 'react'
// import { ActiveContext } from '../pages/Development/DevelopmentPage'

// COMPONENTS
import StyledLink from './StyledLink'
import ImageOverlay from './ImageOverlay'
import Modal from './Modal'

// UTILS
import { trimLink } from '../utils/utilities'

// STYLES
import styled from '../styles/styled-components'
import theme from '../styles/light-theme'

const ProjectCardContainer = styled.div`
  display: flex;
  width: 400px;
  height: 300px;
  color: #95A4AF;  
  box-sizing: border-box;
`
type CardProps = {
  active: boolean
}
const ProjectCard = styled.div<CardProps>`
  display: flex;
  position: relative;
  
  background-color: #36383F;
  justify-content: center;
  align-items: center;
  margin: auto;

  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  -webkit-perspective: 1000em;
  perspective: 1000em;
  
  transition: all 1.5s ease-in;

  transform: ${props => props.active ? 
    'perspective(1000em) rotateY(180deg)' : ''};  
`
const ProjectCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 10px 8px #1F2024;
`
const ProjectCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 8px 8px #1F2024;
  transform: rotateY(180deg);
`


type Props = {
  title?: string
  link?: string
  subtitle?: string
  position?: string
  dates?: string
  img?: string
  imgPosition?: string
  imgScale?: number
  alt?: string
}
const Projects: React.FC<Props> = ({
  title,
  link,
  subtitle,
  position,
  dates,
  img,
  imgPosition,
  imgScale,
  alt = '',
}: Props): JSX.Element => {
  const [ activated, setActivated ] = useState(false)

  const handleClick = () => {
    activated ? setActivated(false) : setActivated(true)
  }

  return (
    <ProjectCardContainer>
      <ProjectCard
        onClick={handleClick}
        active={activated}
      >
        <ProjectCardFront>
          Front text or image
        </ProjectCardFront>
        <ProjectCardBack>
          back text or image
        </ProjectCardBack>
      </ProjectCard>
    </ProjectCardContainer>
  )
}

export default Projects