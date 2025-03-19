import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 150px;
    font-family: 'Roboto', sans-serif;

    .title-container {
        h1 {
            color: ${props => props.theme["yellow-800"]};
            font-size: 2rem;
            font-weight: 800;
            line-height: 1.3;
            padding-top: 100px;
        }
        
        p {
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
            line-height: 1.3;
        }
    }
`;
