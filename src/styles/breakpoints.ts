// 480, 481-768, 769+
export const breaks = {
  mobile: {
    max: 480,
  },
  tablet: {
    min: 481,
    max: 768,
  },
  laptop: {
    min: 769,
    max: 1024,
  },
  desktop: {
    min: 1025,
    max: 1200,
  },
  largeScreen: {
    min: 1201,
  }
}

export const mobile = `@media screen and (max-width: ${breaks.mobile.max}px)`

export const tablet = `@media screen and (min-width: ${breaks.tablet.min}px) and (max-width: ${breaks.tablet.max}px)`

export const laptop = `@media screen and (min-width: ${breaks.laptop.min}px) and (max-width: ${breaks.laptop.max}px)`

export const desktop = `@media screen and (min-width: ${breaks.desktop.min}px) and (max-width: ${breaks.desktop.max}px)`

export const largeScreen = `@media screen and (min-width: ${breaks.largeScreen.min}px)`

const mediaBreak = {
  mobile,
  tablet,
  laptop,
  desktop,
}

export default mediaBreak

