import styled from "styled-components";

export const AddressContainer = styled.div`
    background: #F3F2F2;
    border-radius: 6px;
    padding: 40px;
    max-width: 640px;
    width: 100%;
    border: 1px solid #E6E5E5;

    * {
        background-color: transparent;
    }
`;

export const AddressHeader = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
`;

export const LocationIcon = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const HeaderTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #403937;
    margin: 0;
    line-height: 1.3;
`;

export const HeaderSubtitle = styled.span`
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
    display: block;
    line-height: 1.3;
`;

export const AddressForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
    
    &.street-row {
        width: 100%;
    }
    
    &.number-complement-row {
        width: 100%;
    }
    
    &.city-info-row {
        width: 100%;
    }
    
    .complemento-wrapper {
        position: relative;
        max-width: 100%;
        flex: 1;
    }
`;

export const Input = styled.input`
    padding: 12px;
    background: #EEEDED;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    font-size: 0.875rem;
    color: #574F4D;
    
    &::placeholder {
        color: #8D8686;
    }
    
    &:focus {
        outline: 1px solid #C47F17;
    }
    
    &.error {
        border-color: #D73035;
    }
`;

export const SmallInput = styled(Input)`
    width: 60px;
`;

export const MediumInput = styled(Input)`
    width: 200px;
    
    &:first-child {
        &.cep-row {
            width: 200px;
        }
    }
`;

export const LargeInput = styled(Input)`
    flex: 1;
`;

export const OptionalLabel = styled.span`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem;
    font-style: italic;
    color: #8D8686;
`;

export const ErrorMessage = styled.span`
    color: #D73035;
    font-size: 0.75rem;
    display: block;
    margin-top: 4px;
    margin-left: 2px;
`;

export const SubmitButton = styled.button`
    background: #DBAC2C;
    color: #FFFFFF;
    border: none;
    border-radius: 6px;
    padding: 12px 8px;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.6;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 8px;
    
    &:hover {
        background: #C47F17;
    }
    
    &:disabled {
        background: #E6E5E5;
        cursor: not-allowed;
    }
`;