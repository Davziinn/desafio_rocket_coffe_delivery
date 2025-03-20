import styled from "styled-components";

export const CardContainer = styled.div`
    width: 256px;
    height: 310px;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 6px 36px 6px 36px;
    padding: 0 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: 'Roboto', sans-serif;
    
    * {
        background-color: transparent;
    }
`

export const CoffeeImage = styled.img`
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 12px;
`

export const Tag = styled.span`
    background: #F1E9C9 !important;
    color: #C47F17;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;
    margin-bottom: 16px;
`

export const Name = styled.h3`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #403937;
    margin-bottom: 8px;
    line-height: 1.3;
`

export const Description = styled.p`
    font-size: 0.875rem;
    color: #8D8686;
    text-align: center;
    margin-bottom: 33px;
    line-height: 1.3;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;

    span {
        font-size: 0.875rem;
        color: #574F4D;
    }
    
    strong {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        color: #574F4D;
    }
`

export const QuantityContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const QuantityControls = styled.div`
    height: 38px;
    display: flex;
    align-items: center;
    gap: 4px;
    background: #E6E5E5 !important;
    border-radius: 6px;
    padding: 0 8px;
    
    span {
        color: #272221;
        padding: 0 4px;
        text-align: center;
        min-width: 20px;
    }

    button {
        border: none;
        color: #8047F8;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
        color: #4B2995;
        }
    }
`

export const CartButton = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 6px;
    background: #4B2995 !important;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover {
        background: #8047F8 !important;
    }
`

export const Title = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 54px;
    color: #403937;
`