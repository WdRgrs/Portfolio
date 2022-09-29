import React from 'react'

// COMPONENTS
import DevModal from '../components/DevModal'
import Icon from '../../../components/Icon'

// CONSTANTS
import { ProjectDates, ProjectDescription, ProjectTitle } from '../../../constants/Projets'
import { Links } from '../../../constants/Links'
import { DevSkills } from '../../../constants/DevSkills'
import { Icons } from '../../../constants/Icons'

// ASSETS
import MelodientArtist from '../../../assets/Melodient/Melodient-artists.png'
import MelodientGenre from '../../../assets/Melodient/Melodient-genre.png'
import MelodientLanding from '../../../assets/Melodient/Melodient-landing.png'
import MelodientTracks from '../../../assets/Melodient/Melodient-tracks.png'
import Melodient from '../../../assets/Melodient/Melodient.png'
import SpotifyLogin from '../../../assets/Melodient/Spotify-login.png'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

type Props = {
  active?: boolean
  title?: string
}
const MelodientModal: React.FC<Props> = ({
  active = false,
  title,
}: Props): JSX.Element => {

  const aboutArray: string[] = [
    'A navigable music map of all available genres offered by Spotify\'s API, deployed on Heroku',
    'Authenticates users via OAuth2 and allows them to sign in with thier personal Spotify account',
    'Multiple dynamic search features for genres, artists and tracks with bread-crumb like navigation',
    'Built in web-player allowing users to listen to any selected song / album / genre in the browser',
    'Genres return 50 random songs with each search allowing users to explore and experience new music',
    'Connected to MongoDB - keeps track of all played songs and returns back the last 10 selectd songs played by any user',
  ]

  const imagesArray: string[] = [
    MelodientLanding, 
    SpotifyLogin, 
    Melodient, 
    MelodientGenre, 
    MelodientArtist, 
    MelodientTracks, 
  ]

  return (
    <DevModal 
      title={ProjectTitle.MELODIENT}
      description={ProjectDescription.MELODIENT}
      link={Links.MELODIENT}
      about={aboutArray}
      dates={ProjectDates.MELODIENT}
      technologies={DevSkills.MELODIENT}
      icon={
        <>
          <Icon 
            type={Icons.YOUTUBE}
            link={Links.MELODIENT_VIDEO}
            size={2.5}
          />
          <Icon 
            type={Icons.GITHUB}
            link={Links.MELODIENT_REPO}
            size={2.5}
          />
        </>
      }
      images={imagesArray}
    />
  )
}

export default MelodientModal