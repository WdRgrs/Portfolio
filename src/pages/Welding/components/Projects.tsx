import React from 'react'

// COMPONENTS

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
import ProjectFlipCard from '../../../components/ProjectFlipCard'

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

type Props = {
  title?: string
}
const Projects: React.FC<Props> = ({
  title,
}: Props): JSX.Element => {

  return (
    <CardContainer>
      <ProjectFlipCard />
      <ProjectFlipCard />
      <ProjectFlipCard />
    </CardContainer>
  )
}

export default Projects