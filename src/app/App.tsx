import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'


// Pages
import LandingPage from '../pages/Landing/LandingPage'
import DevelopmentPage from '../pages/Development/DevelopmentPage'
import WeldingPage from '../pages/Welding/WeldingPage'
import PhotographyPage from '../pages/Photography/PhotographyPage'

//COMPONENTS
// import NavBar from '../components/NavBar';

// STYLES
import styled from '../styles/styled-components';
// import theme from '../styles/light-theme'
import GlobalStyle from '../styles/global-styles'
import { Pages } from '../constants/Pages';

// STYLED COMPONENTS
const ApplicationWrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* overflow-x: hidden; */
  overflow: hidden;
  cursor: default;
  overscroll-behavior: none;
`

function App() {
  return (
    <ApplicationWrapper>
      <Router>
        <Routes>
          <Route path={`Portfolio/${Pages.DEVELOPMENT}`} element={<DevelopmentPage />} />
          <Route path={`/${Pages.WELDING}`} element={<WeldingPage />} />
          <Route path={`/${Pages.PHOTOGRAPHY}`} element={<PhotographyPage />} />
          <Route path={`Portfolio/${Pages.LANDING}`} element={<LandingPage />} />
        </Routes>
      </Router> 
      <GlobalStyle />
    </ApplicationWrapper>
  )
}

export default App
