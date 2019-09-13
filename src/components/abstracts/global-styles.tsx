import React from 'react'
import { css, Global } from '@emotion/core'

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      '游ゴシック Medium', YuGothic, 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
    -webkit-overflow-scrolling: touch;
  }

  h1,
  h2,
  p,
  ul {
    margin: 0;
  }

  a,
  button,
  [role='button'],
  label,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button,
  input,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
`

export function GlobalStyles() {
  return <Global styles={styles} />
}
