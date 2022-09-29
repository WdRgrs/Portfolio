import * as styledComponents from 'styled-components'

import { ThemeInterface } from './light-theme'

// https://github.com/styled-components/styled-components-website/issues/392#issuecomment-448136213
declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled