import styled from 'styled-components';

export const CardPagamentoContainer = styled.div`
    padding-top: 15px;
    padding-bottom: 150px;
`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: #F3F2F2;
    border: 1px solid #E6E5E5;
    padding: 2.5rem;
    border-radius: 8px;
    max-width: 640px;
    font-family: 'Roboto', sans-serif;

    * {
        background-color: transparent;
    }
`

export const PaymentHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
`

export const PaymentTitle = styled.h5`
    color: #403937;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.25rem 0;
`

export const PaymentDescription = styled.p`
    color: #574F4D;
    font-size: 0.875rem;
    line-height: 1.3;
    margin: 0;
`

export const PaymentOptions = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`

export const PaymentButton = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    background-color: #E6E5E5;
    color: #574F4D;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 0.875rem;
    height: 60px;
    width: 100%;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
    justify-content: flex-start;

    &:hover {
        background-color: #D7D5D5;
    }

    &:focus {
        outline: none;
        border-color: #8047F8;
        background-color: #EBE5F9;
    }
`