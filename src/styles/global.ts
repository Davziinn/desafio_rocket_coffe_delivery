import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme['gray-100']};
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['white']};
}
`