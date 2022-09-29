import React, { useState } from 'react'

// COMPONENTS 
import Modal from '../../../components/Modal'
import Section from '../../../components/Section'

// CONSTANTS
import { DevSkills } from '../../../constants/DevSkills'

// ASSETS
import DevMCertificate from '../../../assets/DevMountain/DevMCertificate.png'
import RespWebDesCert from '../../../assets/OtherProjects/RespWebDesCert.png'

// UTILS
import { uniqueArray } from '../../../utils/utilities'

// STYLES
import styled, { css } from '../../../styles/styled-components'
import theme, { colors } from '../../../styles/light-theme'

const Title = styled.div`
  font-family: ${theme.fonts.families.barlow};
  font-size: ${theme.fonts.sizes.xlarge};
  margin-bottom: .4rem;
  font-weight: ${theme.fonts.weights.medium};
`
const CertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
`
const CertificationTitle = styled.div`
  font-family: ${theme.fonts.families.poppins};
  font-size: ${theme.fonts.sizes.large};
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.primary};

  span {
  font-family: ${theme.fonts.families.fira};
  font-size: ${theme.fonts.sizes.medium};
  color: ${theme.colors.lightgrey};
  line-height: .5rem;
  }
  `
const CertificationSubtitle = styled.div`
  font-family: ${theme.fonts.families.barlow};
  font-size: ${theme.fonts.sizes.medium};
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.grey};
  line-height: .5rem;
`
const CertificateImg = styled.img`
  width: 300px;
  transition-duration: .8s;
  border: 2px solid black;

  &:hover {
    transform:translate(30%, 35%) scale(2.4);
    z-index: 1;
  }
`
const SkillsList = styled.ul`
  /* margin: 1rem 0; */
  /* font-variant: none; */
  font-family: ${theme.fonts.families.barlow};
  font-size: ${theme.fonts.sizes.large};
  color: ${theme.colors.primary};
  font-weight: ${theme.fonts.weights.book};
`

type Props = {
  title?: string
}
const Skills: React.FC<Props> = ({
  title,
}: Props): JSX.Element => {
  
  const uniqueSkillsArray = 
    uniqueArray(
      ...DevSkills.NEXTIQ,
      ...DevSkills.MELODIENT, 
      ...DevSkills.DEVMOUNTAIN, 
    )

  return (
    <>
      <Section>
        <Title>
          Certifications (2)
        </Title>
        <CertContainer>
          <CertificationCard>
            <CertificateImg src={DevMCertificate} />
            <CertificationTitle>DevMountain, <span>Sep 2021</span></CertificationTitle>
            <CertificationSubtitle>Web Development Certification</CertificationSubtitle>
          </CertificationCard>
          <CertificationCard>
            <CertificateImg src={RespWebDesCert} />
            <CertificationTitle>FreeCodeCamp, <span>Jan 2022</span></CertificationTitle>
            <CertificationSubtitle>Responsive Web Design</CertificationSubtitle>
          </CertificationCard>
        </CertContainer>
      </Section>
      <Section>
        <Title>
          {`Skills (${uniqueSkillsArray.length})`}
          <SkillsList>
            {uniqueSkillsArray
              .map((skill: string, idx: number, arr: string[]) => 
                skill + ((idx !== arr.length - 1) ? ' ♦ ' : '')
            )}
          </SkillsList>
        </Title>
      </Section>
    </>
  )
}

export default Skills