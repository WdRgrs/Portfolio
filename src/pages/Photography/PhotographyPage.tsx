import React from 'react'

// COMPONENTS
import Header from '../../components/Header'
import Section from '../../components/Section'
import LocalNav from '../../components/LocalNav'
import PagePicture from '../../components/PagePicture'
import Footer from '../../components/Footer'
import Colors from './components/colors'

// CONSTANTS
import { Pages, PageTitle } from '../../constants/Pages'

// ASSETS
import WadeRogers4 from '../../assets/ProfilePictures/WadeRogers4.png'

// STYLES
import styled from '../../styles/styled-components'
import theme from '../../styles/light-theme'
import mediaBreak from '../../styles/breakpoints'
import PageContainer from '../../components/PageContainer'


const PhotographyPage: React.FC = (): JSX.Element => {

  return (
    <>
			<title>WR | Photography</title>
      <Header title={PageTitle.PHOTOGRAPHY} page={Pages.PHOTOGRAPHY} />
      <PageContainer >
        <PagePicture 
          source={WadeRogers4}
          alt={'fishing with camera around neck'}  
          />
        <LocalNav 
          titleOptions={[
            'Photography', 
            // 'Dronography', 
            // 'Colors',
          ]} 
          firstContent={'It\'s rare that I\'m ever without a camera close at hand ~ in the process of finding a CDN ~ photos and vidoes coming soon!'}
          secondContent={
            <>
            </>
          }
          thirdContent={
            <Colors />
          }
        />    
      </PageContainer>
      <Footer />
    </>
  )
}

export default PhotographyPage