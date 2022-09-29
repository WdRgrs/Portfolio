// STYLES
import styled, { css } from '../styles/styled-components'
import ImageOverlay from './ImageOverlay'
import theme, { colors } from '../styles/light-theme'
import mediaBreak from '../styles/breakpoints'

const PictureContainer = styled.div`
  margin: 2rem;
  height: fit-content;
  box-sizing: border-box;

  ${mediaBreak.mobile} {
    display: flex;
    justify-self: center;
    margin: 1rem auto;
  }
`
const Picture = styled.img`
  object-fit: contain;
  width: 300px;
  opacity: .89;
  transition-duration: .4s;

  &:hover {
    opacity: .95;
  }
`

type Props = {
  source: string
  alt?: string
}
const PagePicture: React.FC<Props> = ({
  source,
  alt,
}: Props): JSX.Element => {
  return (
    <PictureContainer>
      <Picture src={source} alt={alt} />
    </PictureContainer>
  )
}

export default PagePicture