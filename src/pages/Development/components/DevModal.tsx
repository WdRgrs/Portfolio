import React, { useState, createContext, useEffect, EffectCallback } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

// COMPONENTS
import StyledLink from '../../../components/StyledLink'
import Modal from '../../../components/Modal';

// UTILS
import { trimLink } from '../../../utils/utilities';

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

// SYTLED COMPONENTS
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 0;
`
const Title = styled.div`
  font-family: ${theme.fonts.families.accent};
  color: ${theme.colors.accentorange};
  font-weight: ${theme.fonts.weights.bold};
  font-size: 3rem;
  line-height: 2rem;
  opacity: .8;
`
const Subitle = styled.div`
  font-family: ${theme.fonts.families.barlow};
  font-weight: ${theme.fonts.weights.medium};
  font-size: ${theme.fonts.sizes.large};
  color: ${theme.colors.accent};
  font-variant: small-caps;
  line-height: 2rem;
  opacity: .5;
  transform: scale(1, .9);
`
const LinkWrapper = styled.div`
  display: inline-block;
  position: absolute;
  margin: 0 auto;
  width: fit-content;
  top: .4rem;
  right: 0;
  left: 0;
`
const ContentContainer = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;
  height: 50%;
`
const ImageContainer = styled.div`
 & div {
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: top;
  }
`
const Dates = styled.div`
  font-family: ${theme.fonts.families.barlow};
  color: ${theme.colors.accent};
  font-weight: ${theme.fonts.weights.medium};
  font-variant: small-caps;
  font-size: 16px;
  opacity: .5;
  transform: scale(1, .9);
`
const ContentWrapper = styled.div`
  color: ${theme.colors.accentorange};
  font-weight: ${theme.fonts.weights.light};
  line-height: 1rem;
  font-variant: small-caps;
  
  & span {
    font-family: ${theme.fonts.families.poppins};
    font-size: ${theme.fonts.sizes.xlarge};
    opacity: .8;
  }
  
  & ul {
    margin: .5rem;
    padding: 0;
  }
  
  & li {
    display: flex;
    font-variant: none;
    font-family: ${theme.fonts.families.barlow};
    color: ${theme.colors.accent};
    font-weight: ${theme.fonts.weights.book};
    margin-bottom: .5rem;
    list-style-type: none;
    align-items: center;
    list-style-type: disc;
  }
  
  & li:before {
    content: "»»";
    opacity: .5;
    margin-right: 1.2rem;
    transform: scale(1.2);
    letter-spacing: -.42rem;
  }
`
const AchievementList = styled.ul``
const DetailsContainer = styled(ContentWrapper)`
  margin: auto 1rem;
`
const Details = styled.div`
  margin: 1rem 0;
  font-variant: none;
  font-family: ${theme.fonts.families.barlow};
  color: ${theme.colors.accent};
  font-weight: ${theme.fonts.weights.book};
`
const IconContainer = styled.div`
  display: flex;
  position: relative;
  bottom: .75rem;
  align-self: center;
  gap: 1.5rem;
    
`

type Props = {
  title: string,
  description?: string,
  link?: string,
  about?: string[],
  technologies?: string[],
  projects?: string[],
  dates?: string,
  images?: string[],
  icon?: any,
}

const DevModal: React.FC<Props> = ({
  title,
  description,
  link,
  about,
  dates,
  technologies,
  images,
  icon,
}: Props): JSX.Element => {

  return (
    <Modal>
      <TitleContainer>
        <Title>{title}</Title>
        <Subitle>{description}</Subitle>
      </TitleContainer>
      { link &&
        <LinkWrapper>        
          <StyledLink 
            text={trimLink(link)} 
            title={link} 
            href={link}
            color={theme.colors.accent}
          />
        </LinkWrapper>
      }
      <ContentContainer>
        {images &&
        <ImageContainer>
          <SimpleImageSlider
            height={240}
            width={400}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={2}   
            slideDuration={1}
            />
          <Dates>{dates}</Dates>
        </ImageContainer>
          }

        <ContentWrapper>
          <span>Achievements</span>
          <AchievementList>
            {about
              ?.map((bullet: string, idx: number) => 
                <li key={idx} >{bullet}</li>)
            }
          </AchievementList>
        </ContentWrapper>
      </ContentContainer>
      {!!technologies?.length &&
        <DetailsContainer>
          <span>{`Skills & Technologies (${technologies.length})`}</span>
          <Details>
            {technologies
              .map((technology: string, idx: number, arr: string[]) => 
                technology + ((idx !== arr.length - 1) ? ' ♦ ' : '')
            )}
          </Details>
        </DetailsContainer>
      }
      {!!icon && 
        <IconContainer>
          {icon}
        </IconContainer>
      }
    </Modal>
  )
}

export default DevModal