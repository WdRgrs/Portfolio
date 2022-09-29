import React from 'react'

// CONSTANTS
import { ProjectDates, ProjectDescription, ProjectTitle } from '../../../constants/Projets'
import { Links } from '../../../constants/Links'

// COMPONENTS
import DevModal from '../components/DevModal'
import Icon from '../../../components/Icon'

// CONSTANTS
import { DevSkills } from '../../../constants/DevSkills'
import { Icons } from '../../../constants/Icons'

// ASSETS
import DevMCertificate from '../../../assets/DevMountain/DevMCertificate.png'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

type Props = {
  active?: boolean
  title?: string
}
const DevMountainModal: React.FC<Props> = ({
  active = false,
  title,
}: Props): JSX.Element => {

  const aboutArray: string[] = [
    'Studied various programming languages with a focus on JavaScript for use with the MERN stack',
    'Exposed to relational databases and SQL queries and the use of programs like Postman',
    'Deployed several React and static (vanilla) Javascript pages on Heroku',
    'Produced and showcased various projects relative to each stage of the software development life cycle - product requirements creation (MVP), lofi and hifi design, quality assurance, automated testing, etc',
    'Recognized as a Devmountain Champion for going above and beyond relative to peer-programming',
  ]
  const imagesArray: string[] = [ 
    // DevMountainLogo,
    DevMCertificate,
  ]

  return (
    <DevModal 
      title={ProjectTitle.DEVMOUNTAIN}
      description={ProjectDescription.DEVMOUNTAIN}
      link={Links.DEVMOUNTAIN}
      about={aboutArray}
      dates={ProjectDates.DEVMOUNTAIN}
      technologies={DevSkills.DEVMOUNTAIN}
      icon={
        <>
          <Icon 
            type={Icons.YOUTUBE}
            link={Links.DEVMOUNTAIN_PROJECT}
            size={2.5}
          />
          <Icon 
            type={Icons.GITHUB}
            link={Links.DEVMOUNTAIN_REPO}
            size={2.5}
          />
        </>
      }
      images={imagesArray}
    />
  )
}

export default DevMountainModal