import styled from 'styled-components'

interface IconContainerProps {
    variant: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export const IntroContainer = styled.section`
    width: 100%;
    padding: 2rem 0;
`

export const IntroContent = styled.div`
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-900']};
    margin-bottom: 1rem;
`

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 4.125rem;
`

export const Features = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
`

export const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    span {
        color: ${(props) => props.theme['gray-700']};
        font-size: 1rem;
    }
`

export const IconContainer = styled.div<IconContainerProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
    background: transparent !important;
    }
    
    background-color: ${(props) => {
        switch (props.variant) {
        case 'yellow-dark':
            return '#C47F17';
        case 'yellow':
            return '#DBAC2C';
        case 'gray':
            return '#574F4D';
        case 'purple':
            return '#8047F8';
        default:
            return '#C47F17';
        }
    }};
`

export const ImageContainer = styled.div`
    img {
        max-width: 476px;
        height: 360px;
    }
`