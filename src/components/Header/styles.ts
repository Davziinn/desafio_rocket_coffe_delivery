import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 150px;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.img`
    height: 40px;
`

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-700']};
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 100;
    gap: 4px;

    svg {
    background: transparent !important;
    }
`

export const CartButton = styled.button`
    background-color: ${(props) => props.theme['yellow-100']};
    padding: 8px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
    background: transparent !important;
    }
`

export const Span = styled.span`
    background: transparent;
`