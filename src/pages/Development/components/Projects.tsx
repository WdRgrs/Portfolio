import React from 'react'

// COMPONENTS
import Section from '../../../components/Section'
import ProjectCard from '../../../components/ProjectCard'

// ASSETS
import NextIQ from '../../../assets/NextIQ/NextIQ.png'
import Melodient from '../../../assets/Melodient/Melodient.png'
import DevMountainLogo from '../../../assets/DevMountain/DevMountainLogo.png'
import GitHubTracker from '../../../assets/GitHubTracker.png'

// CONSTANTS
import { ProjectDates, ProjectDescription, ProjectPosition, ProjectTitle } from '../../../constants/Projets'
import { Links } from '../../../constants/Links'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  /* margin: auto; */
`

type Props = {
  title?: string
}
const Projects: React.FC<Props> = ({
  title,
}: Props): JSX.Element => {

  return (
    <CardContainer>
      <ProjectCard 
        title={ProjectTitle.NEXTIQ} 
        link={Links.NEXTIQ}
        subtitle={ProjectDescription.NEXTIQ} 
        position={ProjectPosition.NEXTIQ}
        dates={ProjectDates.NEXTIQ}
        img={NextIQ}
      />
      <ProjectCard 
        title={ProjectTitle.MELODIENT} 
        link={Links.MELODIENT}
        subtitle={ProjectDescription.MELODIENT} 
        position={ProjectPosition.MELODIENT}
        dates={ProjectDates.MELODIENT}
        img={Melodient}
        imgPosition={'top'}
        imgScale={1.4}
      />
      <ProjectCard 
        title={ProjectTitle.DEVMOUNTAIN} 
        link={Links.DEVMOUNTAIN}
        subtitle={ProjectDescription.DEVMOUNTAIN} 
        position={ProjectPosition.DEVMOUNTAIN}
        dates={ProjectDates.DEVMOUNTAIN}
        img={DevMountainLogo}
      />
      <ProjectCard 
        title={ProjectTitle.OTHER_PROJECTS} 
        link={Links.GITHUB_REPOS}
        subtitle={ProjectDescription.OTHER_PROJECTS} 
        position={ProjectPosition.OTHER_PROJECTS}
        dates={ProjectDates.OTHER_PROJECTS}
        img={GitHubTracker}
        imgPosition={'right'}
      />
    </CardContainer>
  )
}

export default Projects