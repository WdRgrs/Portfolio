import React from 'react'

// COMPONENTS
import DevModal from '../components/DevModal'
import Modal from '../../../components/Modal'

// ASSETS
import NextIQCertification from '../../../assets/NextIQ/NextIQCertification.png'
import NextIQQAdocs1 from '../../../assets/NextIQ/NextIQ-QA-docs-1.png'
import NextIQQAdocs2 from '../../../assets/NextIQ/NextIQ-QA-docs-2.png'

// CONSTANTS
import { ProjectDates, ProjectDescription, ProjectTitle } from '../../../constants/Projets'
import { Links } from '../../../constants/Links'
import { DevSkills } from '../../../constants/DevSkills'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

type Props = {
  active?: boolean
  title?: string
}
const NextIQModal: React.FC<Props> = ({
  active = false,
  title,
}: Props): JSX.Element => {

  const aboutArray = [
    'Created, maintained, refactored and debugged various website pages, documentation, react components and user workflows in accordance with company standards and design',
    'Curated analytics and metrics of user activity on the platform as a means to gauge product value and to help guide data driven decisions',
    'Responsible for ensuring the website responded dynamically relative to mobile, tablet, laptop and desktop dimensions',
    'Implemented and managed QA - communicated and collaborated with other departments to understand product and technical requirements as a means to eliminate rework from bugs and design conflicts',
    'Explored and implemented new technologies/tools/libraries as a means to solve problems and improve the platform',
  ]

  const imagesArray = [
    NextIQCertification, 
    NextIQQAdocs1, 
    NextIQQAdocs2
  ];

  return (
    <DevModal 
      title={ProjectTitle.NEXTIQ}
      description={ProjectDescription.NEXTIQ}
      link={Links.NEXTIQ}
      about={aboutArray}
      dates={ProjectDates.NEXTIQ}
      technologies={DevSkills.NEXTIQ}
      images={imagesArray}
    />
  )
}

export default NextIQModal
  