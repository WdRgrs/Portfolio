import React from 'react'

// COMPONENTS
import ProjectFlipCard from '../../../components/ProjectFlipCard'

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

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

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
        mainText={'Nassau, Bahamas'}
      />
      <ProjectFlipCard 
        img={BeltBuckle}
        mainText={'Pipefitter\'s belt buckle'}
      />
      <ProjectFlipCard 
        img={BPWeldSchool}
        mainText={'Chromoly project'}
      />
      <ProjectFlipCard 
        img={BsLeaf}
        mainText={'Blacksmithing, Leaf'}
      />
      <ProjectFlipCard 
        img={HooverDam}
        mainText={'Penstock tunnels, HD'}
      />
      <ProjectFlipCard 
        img={HooverDam2}
        mainText={'Outlet works, HD'}
      />
      <ProjectFlipCard 
        img={RD}
        mainText={'R & D, Water purification'}
      />
      <ProjectFlipCard 
        img={WadeRogersWeld2}
        mainText={'Stainless chamber welding'}
      />
      <ProjectFlipCard 
        img={Welds}
        mainText={'Exotic metals'}
      />
    </CardContainer>
  )
}

export default Projects