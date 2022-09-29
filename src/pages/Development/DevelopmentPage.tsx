import React, { useState, createContext, useEffect } from 'react'

// COMPONENTS
import PageContainer from '../../components/PageContainer'
import Header from '../../components/Header'
import LocalNav from '../../components/LocalNav'
import PagePicture from '../../components/PagePicture'
import About from './components/About'
import Projects from './components/Projects'
import Footer from '../../components/Footer'
import Skills from './components/Skills'
import Section from '../../components/Section'

// MODALS
import NextIQModal from './modals/NextIQ'
import MelodientModal from './modals/Melodient'
import DevMountainModal from './modals/DevMountain'
import OtherProjectsModal from './modals/OtherProjects'

// ASSETS
import WadeRogersComputer from '../../assets/ProfilePictures/WadeRogersComputer.png'

// CONSTANTS
import { ProjectTitle } from '../../constants/Projets'
import { Pages, PageTitle } from '../../constants/Pages'

// STYLES
import styled from '../../styles/styled-components'
import theme from '../../styles/light-theme'
import mediaBreak from '../../styles/breakpoints'

let stateVariable: boolean = false
let setStateVariable: any
let stateTitle: string = ''
let setStateTitle: any

export const ActiveContext = 
  createContext([
    stateVariable, 
    setStateVariable, 
    stateTitle, 
    setStateTitle
  ]);

const DevelopmentPage: React.FC = (): JSX.Element => {

  const [active, setActive] = useState<boolean>(false)
  const [projectTitle, setProjectTitle] = useState<string>('')

  const renderModal = (name: string): JSX.Element => {
    switch(name) {
      case ProjectTitle.NEXTIQ:
        return <NextIQModal />
      case ProjectTitle.MELODIENT:
        return <MelodientModal />
      case ProjectTitle.DEVMOUNTAIN:
        return <DevMountainModal />
      case ProjectTitle.OTHER_PROJECTS:
        return <OtherProjectsModal />
      default:
        return <></>
    }
  } 

  return (
    <ActiveContext.Provider value={[active, setActive, projectTitle, setProjectTitle]}>
      <title>WR | Software Development</title>
      <Header title={PageTitle.DEVELOPMENT} page={Pages.DEVELOPMENT} />
      <PageContainer>
        <PagePicture 
          source={WadeRogersComputer}
          alt={''}  
        />
        <LocalNav 
          titleOptions={['About', 'Projects', 'Education & Skills']} 
          firstContent={<About />}
          secondContent={<Projects />}
          thirdContent={<Skills />}
        />
        {active && renderModal(projectTitle)}  
      </PageContainer>
      <Footer />
    </ActiveContext.Provider>
  )
}

export default DevelopmentPage