import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    padding: 0 150px;
    max-width: 1440px;
    margin: 0 auto;
`

export const CheckoutContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 448px;
    gap: 2rem;
    
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

export const OrderFormColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const OrderDetailsColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    /* padding-left: 32px; */
`

export const TitleCard = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 72px;
    padding-bottom: 15px;
`