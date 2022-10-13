import React, { useState } from 'react'
// import { ActiveContext } from '../pages/Development/DevelopmentPage'

// COMPONENTS
import StyledLink from './StyledLink'
import Modal from './Modal'

// UTILS
import { trimLink } from '../utils/utilities'

// STYLES
import styled from '../styles/styled-components'
import theme from '../styles/light-theme'

const ProjectCardContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  color: ${theme.colors.lightestgrey};
  box-sizing: border-box;
  
  &:hover {
    cursor: pointer;
  }
`
type CardProps = {
  active?: boolean
  img?: string
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
const ImageOverlay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  position: absolute;
  width: 100%;
  height: 100%;
  transition-duration: 1.2s;
  background-image: linear-gradient(
    to top,
    ${theme.colors.primary},
    transparent
  );
  opacity: 0;
  font-family: ${theme.fonts.families.poppins};
  font-weight: ${theme.fonts.weights.book};
  font-size: ${theme.fonts.sizes.xlarge};
  color: ${theme.colors.white};
  &:hover {
    opacity: .6;
  }
`
const BlurImage = styled.div<CardProps>`
  background-image: ${props => props.img ? `url(${props.img})` : ''};
  position: absolute;
  z-index: -1;
  opacity: .7;
  filter: blur(.15rem);
  height: 100%;
  width: 100%;
`
const ProjectCardFront = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 10px 8px ${theme.colors.grey};
  background-image: ${props => props.img ? `url(${props.img})` : ''};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px solid ${theme.colors.primary};
  box-sizing: border-box;
  
`
const ProjectCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: ${theme.fonts.families.poppins};
  font-weight: ${theme.fonts.weights.book};
  font-size: ${theme.fonts.sizes.xlarge};
  color: ${theme.colors.white};
  backface-visibility: hidden;
  box-shadow: 0px 8px 8px #1F2024;
  transform: rotateY(180deg);
  border: 1px solid ${theme.colors.primary};
  box-sizing: border-box;
`


type Props = {
  mainText?: string
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
  mainText,
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
        img={img} 
      >
        <ProjectCardFront img={img} >
          <ImageOverlay>
            {mainText}
          </ImageOverlay>
          <BlurImage img={img} />
        </ProjectCardFront>
        <ProjectCardBack>
          <BlurImage img={img} />
          More information coming soon!
        </ProjectCardBack>
      </ProjectCard>
    </ProjectCardContainer>
  )
}

export default Projects