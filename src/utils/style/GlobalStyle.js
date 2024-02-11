import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    box-sizing:border-box;
    margin: auto;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
}
a {
    text-decoration:none;
}

li {
   list-style:none;
}
`

export default GlobalStyle
