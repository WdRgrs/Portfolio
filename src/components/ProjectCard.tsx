import React, { useContext } from 'react'
import { ActiveContext } from '../pages/Development/DevelopmentPage'

// COMPONENTS
import StyledLink from './StyledLink'
import ImageOverlay from './ImageOverlay'
import Modal from './Modal'

// UTILS
import { trimLink } from '../utils/utilities'

// STYLES
import styled from '../styles/styled-components'
import theme from '../styles/light-theme'

const TitleContainer = styled.div`
  line-height: 1;
  /* border: 2px solid red; */
`
const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: .8rem;
  width: 345px;
  height: 210px;
  gap: .5rem;
  border-top: 3px solid ${theme.colors.background};
  color: ${theme.colors.primary};
  transition-duration: .25s;
  box-shadow: 0px 10px 8px ${theme.colors.lightgrey};

  box-sizing: border-box;
  
  &:hover {
    transform: translate(0, -1px);
    /* margin-top: -2px; */
    border-top: 3px solid ${theme.colors.secondary};
  }
`
const InfoContainer = styled.div`
/* margin: .8rem; */
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`

const ProjectTitle = styled.div`
  font-family: ${theme.fonts.families.accent};
  font-size: ${theme.fonts.sizes.xlarge};
  font-weight: ${theme.fonts.weights.bold};
  font-variant: small-caps;
  transition-property: all;
  transform-origin: left;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.secondary};

    /* transform: scale(1.1); */
  }
`
const ProjectSubtitle = styled.div`
  font-family: ${theme.fonts.families.barlow};
  font-size: ${theme.fonts.sizes.medium};
`
const ProjectPosition = styled.div`
  font-family: ${theme.fonts.families.barlow};
  font-size: ${theme.fonts.sizes.medium};
`
const LinkWrapper = styled.div`
  position: absolute;
  font-size: ${theme.fonts.sizes.medium};
  font-weight: ${theme.fonts.weights.bold};
  right: 0;
  bottom: 0;
  
  /* &:hover {
    cursor: pointer;
    color: ${theme.colors.secondary};
  } */
`
const ProjectDates = styled.div`
  position: absolute;
  font-family: ${theme.fonts.families.barlow};
  font-size: 13px;
  font-weight: ${theme.fonts.weights.bold};
  right: 0;
  
`
const ProjectImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: ${theme.colors.secondary};
  overflow: clip;
`
type ImageProps = {
  imgPosition?: string
  imgScale?: number
}
const ProjectImage = styled.img<ImageProps>`
  object-fit: cover;
  object-position: ${props => props.imgPosition ? props.imgPosition : 'center'};
  transform: ${props => props.imgScale ? `scale(${props.imgScale})` : 'scale(1)'};
  width: 100%;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`
type Props = {
  title: string
  link: string
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
  const [active, setActive, projectTitle, setProjectTitle] = useContext(ActiveContext)

  const handleClick = (title: string) => {
    setActive(true)
    setProjectTitle(title)
  }


  return (
    <ProjectCard>
      <InfoContainer>
        <TitleContainer>
          <ProjectTitle
            onClick={() => handleClick(title)}
          >
            {title}
          </ProjectTitle>
          <ProjectSubtitle>{subtitle}</ProjectSubtitle>
          <ProjectPosition>{position}</ProjectPosition>
        </TitleContainer>
        <ProjectDates>{dates}</ProjectDates>
          <LinkWrapper>
            <StyledLink 
              href={link}
              text={trimLink(link)}
              title={link}
              font={theme.fonts.families.barlow}
              size={theme.fonts.sizes.medium}
              />
          </LinkWrapper>
      </InfoContainer>
      <ProjectImageContainer>
        <ProjectImage 
          src={img} 
          alt={alt} 
          imgPosition={imgPosition}
          imgScale={imgScale}         
          />
        <ImageOverlay onClick={() => handleClick(title)} mouse />
      </ProjectImageContainer>
    </ProjectCard>
  )
}

export default Projects