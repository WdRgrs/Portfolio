export interface ThemeInterface {
  colors: any
  textColors: any
  fonts: any
  radii: any
  borderWidth: any
  spacing: any
  elements: any
  theme: any
}


const colors = {
  primary: '#051622',
  secondary: '#1BA098',
  secondaryhalf: '#1ba0979a',
  secondarypop: '#66FCF1',
  background: '#A4D9D5',
  accent: '#DEB992',
  accentorange: '#FB9039',
  
  white: '#FFF',
  black: '#000',

  darkgrey: '#232323',
  grey: '#333333',
  mediumgrey: '#505050',
  lightgrey: '#808080',
  lightestgrey: '#CDCDCD',
  
  red: '#E50914',
  lightred: '#FC646E',
  green: '#64FC8D',
}  

const textColors = {
  primary: colors.primary,
  secondary: colors.secondary,
  accent: colors.accent,
  white: colors.white,
  black: colors.black,
  darkgrey: colors.darkgrey,
  grey: colors.grey,
  light: colors.lightgrey,
}

const fonts = {
  families: {
    primary: 'SourceSansPro-Black, Helvetica, Arial',
    secondary: 'OpenSans, Helvetica, Arial',
    accent: 'Bitter-Italic, Times, serif',
    special: '',
    cinzel: 'Cinzel Decorative, cursive',
    ftgreat: 'Fredericka the Great, cursive',
    poppins: 'Poppins, sans-serif',
    barlow: 'Barlow, sans-serif',
    fira: 'Fira Mono, monospace',
  },
  sizes: {
    small: '12px',
    medium: '15px',
    large: '18px',
    xlarge: '22px',
    xxlarge: '28px',
    xxxlarge: '36px',
    xxxxlarge: '3rem',
  },
  weights: {
    xlight: '200',
    light: '300',
    book: '400',
    medium: '500',
    medbold: '600',
    bold: '700',
  }
}

const radii = {
  small: '4px',
  medium: '6px',
  large: '9px',
  circle: '50%',
}

const borderWidth = {
  thin: '1px',
  medium: '2px',
  thick: '3px',
}

const spacing = {
  primary: '1rem',
  secondary: '.5rem',
  belowTitle: '10px',
  sectionTop: '80px',
  sectionBottom: '80px',
}

const elements = {
  button: {
    small: {
      width: '',
      height: '',
      margin: '',
    },
    medium: {
      width: '',
      height: '',
      margin: '',
    },
    large: {
      width: '',
      height: '',
      margin: '',
    },
  }
}

const theme = {
  colors,
  textColors,
  fonts,
  radii,
  borderWidth,
  spacing,
  elements,
}

export { colors, textColors, radii, spacing }
export default theme