import React, { useContext } from 'react'
import { ActiveContext } from '../pages/Development/DevelopmentPage'

// STYLES
import styled, { css } from '../styles/styled-components'
import theme, { colors } from '../styles/light-theme'
import Icon from './Icon'
import { Icons } from '../constants/Icons'

// STYLED COMPONENTS
const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  z-index: 1; // * Needed to overlap footer

  
  /* background-image: linear-gradient(
    to top,
    ${theme.colors.secondaryhalf},
    transparent
  ); */
`
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 900px;
  height: 600px;
  background-color: ${theme.colors.primary};
  opacity: .95;
`
const Close = styled.div`
  position: absolute;
  float: right;
  width: 2rem;
  height: 2rem;
  top: .75rem;
  right: .75rem;  
  border-radius: 50%;
  transition-duration: .3s;
  transition-property: all;
  z-index: 2;

  &:hover {
    cursor: pointer;
    transform: scale(1.2) rotate(-90deg);  
  }
`

type Props = {
  children?: any
}
const Modal: React.FC<Props> = ({
  children,
}: Props): JSX.Element => {

  const [active, setActive] = useContext(ActiveContext)

  const handleClick = () => {
    setActive(false)
  }

  return (
    <>
    {!!active &&
      <ModalOverlay>
        <ModalContainer>
          <Close onClick={handleClick}>
            <Icon 
              type={Icons.CLOSE} 
              color={theme.colors.accentorange} 
              size={2} 
            />
          </Close>
          {children}
        </ModalContainer>
      </ModalOverlay>
    }
    </>
  )
}

export default Modal