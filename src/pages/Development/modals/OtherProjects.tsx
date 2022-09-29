import React from 'react'

// CONSTANTS
import { ProjectDates, ProjectDescription, ProjectTitle } from '../../../constants/Projets'
import { Links } from '../../../constants/Links'
import { Icons } from '../../../constants/Icons'
import { DevSkills } from '../../../constants/DevSkills'

// UTILS
import { uniqueArray } from '../../../utils/utilities'

// COMPONENTS
import DevModal from '../components/DevModal'
import Icon from '../../../components/Icon'

// ASSETS
import Code from '../../../assets/Code.png'
import FigmaPortfolio from '../../../assets/OtherProjects/FigmaPortfolio.png'
import RespWebDesCert from '../../../assets/OtherProjects/RespWebDesCert.png'
import CloneLanding from '../../../assets/OtherProjects/Clone-landing.png'
import NetflixLanding from '../../../assets/OtherProjects/Netflix-landing.png'
import NetflixHome from '../../../assets/OtherProjects/Netflix-home.png'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'


type Props = {
  active?: boolean
  title?: string
}
const OtherProjectsModal: React.FC<Props> = ({
  active = false,
  title,
}: Props): JSX.Element => {

  const aboutArray: string[] = [
    'Currently building out a more robust portfolio page that will include previous adventures (career and hobbies)',
    'In the process of creating pixel-perfect clones as front-end based challenges: Netflix, Google, Midwestern, Discord',
    'Expanding design proficiencies via Figma - all projects are designed from a wireframe level, followed up with more detailed and in-depth hi-fi\'s',
    'Working through FreeCodeCamp\'s JavaScript Algorithms and Data Structures Certification',
    'Previously completed various challenges, tutorials and guides specific to Front-end, React, Algorithms and JavaScript - FreeCodeCamp, LeetCode, Codecademy, etc',
  ]

  const uniqueSkillsArray = 
    uniqueArray(
      ...DevSkills.NEXTIQ,
      ...DevSkills.MELODIENT, 
      ...DevSkills.DEVMOUNTAIN, 
    )

  const imagesArray: string[] = [
    FigmaPortfolio, 
    CloneLanding, 
    NetflixLanding, 
    NetflixHome,
  ]

  return (
    <DevModal 
      title={ProjectTitle.OTHER_PROJECTS}
      description={ProjectDescription.OTHER_PROJECTS}
      link={Links.GITHUB_REPOS}
      about={aboutArray}
      dates={ProjectDates.OTHER_PROJECTS}
      technologies={uniqueSkillsArray}
      icon={
        <Icon 
          type={Icons.GITHUB}
          link={Links.GITHUB_REPOS}
          size={2.5}
        />
      }
      images={imagesArray}
    />
  )
}

export default OtherProjectsModal