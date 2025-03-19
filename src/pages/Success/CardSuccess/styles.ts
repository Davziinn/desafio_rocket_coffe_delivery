import styled from "styled-components";

interface InfoWithIconProps {
    iconBg: string;
}

export const OrderInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
        background: transparent;
    }

    .info-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2.5rem;
        border-radius: 6px 36px 6px 36px;
        background: ${props => props.theme.white};
        min-width: 32rem;
        position: relative;
        z-index: 1;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 2px;
            border-radius: 6px 36px 6px 36px;
            background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
            -webkit-mask: 
                linear-gradient(white 0 0) content-box, 
                linear-gradient(white 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: -1;
        }
    }

    @media (max-width: 1120px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const InfoWithIcon = styled.div<InfoWithIconProps>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
        padding: 0.5rem;
        background: ${props => props.iconBg};
        border-radius: 50%;
    }
`;

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.theme["base-text"]};
        line-height: 1.3;
    }
`;

export const ImageContainer = styled.div`
    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
