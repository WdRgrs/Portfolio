import React from 'react'

// COMPONENTS

// ASSETS
import WadeRogersWelding from '../../../assets/Welding/WadeRogersWelding.webp'
import BeltBuckle from '../../../assets/Welding/BeltBuckle.webp'
import BPWeldSchool from '../../../assets/Welding/BPWeldSchool.webp'
import BsLeaf from '../../../assets/Welding/BsLeaf.webp'
import HooverDam from '../../../assets/Welding/HooverDam.webp'
import HooverDam2 from '../../../assets/Welding/HooverDam2.webp'
import RD from '../../../assets/Welding/RD.webp'
import WadeRogersWeld2 from '../../../assets/Welding/WadeRogersWeld2.webp'
import Welds from '../../../assets/Welding/Welds.webp'


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
      <ProjectFlipCard 
        img={WadeRogersWelding}
      />
      <ProjectFlipCard 
        img={BeltBuckle}
      />
      <ProjectFlipCard 
        img={BPWeldSchool}
      />
      <ProjectFlipCard 
        img={BsLeaf}
      />
      <ProjectFlipCard 
        img={HooverDam}
      />
      <ProjectFlipCard 
        img={HooverDam2}
      />
      <ProjectFlipCard 
        img={RD}
      />
      <ProjectFlipCard 
        img={WadeRogersWeld2}
      />
      <ProjectFlipCard 
        img={Welds}
      />
    </CardContainer>
  )
}

export default Projects