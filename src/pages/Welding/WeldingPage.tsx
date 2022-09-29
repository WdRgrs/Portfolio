import React from 'react'

// CONSTANTS
import { Pages, PageTitle } from '../../constants/Pages'

// ASSETS
import WadeRogersWeld from '../../assets/ProfilePictures/WadeRogersWeld.png'

// COMPONENTS
import Button from '../../components/Button'
import PageContainer from '../../components/PageContainer'
import UniversalTitle from '../../components/UniversalTitle'
import Header from '../../components/Header'
import LocalNav from '../../components/LocalNav'
import Section from '../../components/Section'
import PagePicture from '../../components/PagePicture'
import Footer from '../../components/Footer'

// STYLES
import styled from '../../styles/styled-components'
import theme from '../../styles/light-theme'
import mediaBreak from '../../styles/breakpoints'
import About from './components/About'

const WeldingPage: React.FC = ():JSX.Element => {
  return (
    <>
      <title>WR | Welding</title>
      <Header title={PageTitle.WELDING} page={Pages.WELDING} />
      <PageContainer>
        <PagePicture 
          source={WadeRogersWeld}
          alt={'Wade Rogers welding at the Hoover Dam'}  
        />
        <LocalNav 
          titleOptions={[
            'About', 
            // 'Projects', 
            // 'Blacksmithing & Metal Arts'
          ]} 
          firstContent={<About />}
          secondContent={
            <>
            </>
          }
          thirdContent={
            <>
            </>
          }
        />
      </PageContainer>
      <Footer />
    </>
  )
}

export default WeldingPage