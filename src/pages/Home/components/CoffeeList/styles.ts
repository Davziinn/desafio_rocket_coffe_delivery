import styled from 'styled-components'

export const Title = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 54px;
    color: #403937;
`

export const CoffeeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 32px;
    margin-top: 32px;
`