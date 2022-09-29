import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Snow from '../../components/Snow'

// STYLES
import styled from '../../styles/styled-components'
import theme from '../../styles/light-theme'
import mediaBreak from '../../styles/breakpoints'
import { Pages } from '../../constants/Pages'

// STYLED COMPONENTS
const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
	align-items: flex-end;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
    ellipse at bottom, 
    ${theme.colors.primary} -40%, 
    ${theme.colors.black} 100%);
  overflow: hidden;
`
const BorderBreak = styled.div`
	position: relative;
	bottom: 3.1rem;
	opacity: .75;
	margin-left: 3.5rem;
	margin-right: ${theme.spacing.primary};
	z-index: -1;
	border: 1px solid ${theme.colors.accent};
	
	${mediaBreak.desktop} {

	}

	${mediaBreak.laptop} {
		bottom: 2.5rem;
		margin-left: 2.7rem;
		margin-right: .85rem;
	}

	${mediaBreak.tablet} {
		display: none;
	}
	
	${mediaBreak.mobile} {
		display: none;
	}
`
const TitleContainer = styled.div`
  position: absolute;
	bottom: 32vh;
  height: 13rem;
  width: fit-content;
	z-index: 1;
  user-select: none;
	/* box-sizing: border-box;
	border-bottom: 1px solid ${theme.colors.accent}; */
  -webkit-box-reflect: 
		below -.5rem 
		linear-gradient(
			transparent, 
			rgba(255, 255, 255, .01),
			rgba(255, 255, 255, .1)
		);
		
	${mediaBreak.laptop} {
		height: 10.4rem;
	}

	${mediaBreak.tablet} {
		height: fit-content;
		-webkit-box-reflect: unset;
	}
	
	${mediaBreak.mobile} {
		height: fit-content;
		-webkit-box-reflect: unset;
	}
`
const NameContainer = styled.div`
  display: inline-block;
  color: ${theme.colors.secondaryhalf};
  -webkit-text-stroke-width: .05rem;
  -webkit-text-stroke-color: ${theme.colors.secondarypop};
  /* margin-bottom: -1px; */

  font-family: 'Cinzel Decorative', cursive;
  font-size: 7rem;  
	
	${mediaBreak.laptop} {
		font-size: 5.5rem;  
	}
	
	${mediaBreak.tablet} {
		display: flex;
		flex-wrap: wrap;
		margin: 0 ${theme.spacing.primary};
	}
	
	${mediaBreak.mobile} {
		margin: 0 ${theme.spacing.primary};
		font-size: 3.8rem;  
	}
`
const FirstName = styled(NameContainer)`
	${mediaBreak.laptop} {
	}
	
	${mediaBreak.tablet} {
		display: block;
		position: relative;
	}
	
	${mediaBreak.mobile} {
		margin: 1.5rem 1rem;
	}

  ::before {
    margin-right: -1.5rem;
    content: 'W';
    font-size: 10rem;
    transition-duration: 3s;
		
		${mediaBreak.laptop} {
			margin-right: -1.2rem;
			font-size: 8rem;
		}
		
		${mediaBreak.tablet} {
			
		}
		
		${mediaBreak.mobile} {
			margin-right: -.7rem;
			font-size: 5rem;
		}
	}
`
const LastName = styled(FirstName)`
  margin-left: 1.5rem;

	${mediaBreak.laptop} {
	
	}
	
	${mediaBreak.tablet} {
		position: relative;
		top: -5rem;
		left: 10rem;		
	}
	
	${mediaBreak.mobile} {
		position: relative;
		top: -5.4rem;
		left: 2rem;	
		
	}

	::before {
		margin-right: -.3rem;
		content: 'R';
		
		${mediaBreak.laptop} {
			margin-right: -.5rem;
		}
		
		${mediaBreak.tablet} {
			
		}
		
		${mediaBreak.mobile} {
			
		}
	}
`
const JobContainer = styled.header`
  position: relative;
  display: flex;
  width: fit-content;
  height: 2rem;
	bottom: 3rem;
	left: 3.5rem;
	
	${mediaBreak.laptop} {
		bottom: 2.4rem;
		left: 3rem;
	}

	${mediaBreak.tablet} {
		position: absolute;
		display: flex;

		justify-content: center;
		width: 100%;
		left: 0;

		/* flex-direction: column;
		align-items: center;
		height: fit-content;
		bottom: -5rem; */
	}

	${mediaBreak.mobile} {
		flex-direction: column;
		position: absolute;
		bottom: -4rem;
		left: 7rem;
		height: fit-content;
		/* margin: 0 auto; */
	}
`
const JobTitle = styled.div`
	display: inline-block;
	position: relative;
  padding: 0;
  margin: 0;
  margin-bottom: .5rem;
  font-family: ${theme.fonts.families.ftgreat};
  font-size: 1.55rem;
  color: ${theme.colors.accent};
  transition-duration: 0.35s;
  
  &:hover {
    opacity: .87;
    cursor: pointer;
    color: ${theme.colors.accentorange};
  }

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: ${theme.colors.accent};
		opacity: .5;
		transform-origin: bottom right;
  	transition: transform 0.35s ease-out;
	}

	&:hover:after {
		transform: scaleX(1);
		background-color: ${theme.colors.accentorange};
		transform-origin: bottom left;


	}

	${mediaBreak.laptop} {
		font-size: 1.2rem;
	}
	
	${mediaBreak.tablet} {
		
	}
	
	${mediaBreak.mobile} {
		font-size: 1.4rem;
	}
`
const StyledBreak = styled.div`
  ::before {
		content: '|';
		color: ${theme.colors.accent};
		font-size: .9rem;
		font-weight: 800;
		opacity: .6;
		position: relative;
		top: .45rem;
		margin: 0 ${theme.spacing.primary};
		
		${mediaBreak.laptop} {
			top: .2rem;
			margin: 0 .7rem;
		}

		${mediaBreak.tablet} {

		}

		${mediaBreak.mobile} {
			content: '';
		}
  }
`
const LandingPage: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(theme.colors.secondary)

  const handleClick = () => {
    active === theme.colors.secondaryhalf ? 
      setActive(theme.colors.secondary) : 
      setActive(theme.colors.secondaryhalf) 
  }

  return (
		<>
			<title>Wade Rogers</title>
			<LandingContainer> 
				<TitleContainer>
					<NameContainer
						color={active}
						onClick={() => handleClick()}
					>
						<FirstName>ade</FirstName>
						<LastName>ogers</LastName>
					</NameContainer>
					<BorderBreak />
					<JobContainer>
						<Link to={`/${Pages.DEVELOPMENT}`}>
							<JobTitle>
								Developer
							</JobTitle>
						</Link>
						<StyledBreak />
						<Link to={`/${Pages.WELDING}`}>
							<JobTitle>
								Welder
							</JobTitle>
						</Link>
						<StyledBreak />
						<Link to={`/${Pages.PHOTOGRAPHY}`}>
							<JobTitle>
								Photographer
							</JobTitle>
						</Link>
					</JobContainer>
				</TitleContainer>
				<Snow />
			</LandingContainer>
		</>
  )
}

export default LandingPage