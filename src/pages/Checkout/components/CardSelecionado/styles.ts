import styled from 'styled-components';

export const Card = styled.div`
    background: #F3F2F2;
    border-radius: 12px;
    padding: 20px;
    width: 100%;
    max-width: 430px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid #E6E5E5;
    font-family: 'Roboto', sans-serif;

    *{
        background: transparent;
    }
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
`;

export const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const ProductInfo = styled.div`
    flex-grow: 1;
`;

export const ProductName = styled.div`
    font-weight: 500;
    margin-bottom: 8px;
`;

export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    background-color: #eee;
    border-radius: 20px;
    padding: 4px 10px;
    width: fit-content;
`;

export const QuantityButton = styled.button<{ color?: string }>`
    background: none;
    border: none;
    color: ${props => props.color || '#777'};
    font-size: 18px;
    cursor: pointer;
    padding: 0 8px;
`;

export const QuantityText = styled.span`
    padding: 0 10px;
    font-weight: 500;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #888;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    padding: 4px 8px;
    background-color: #eee;
    border-radius: 4px;
`;

export const Price = styled.div`
    font-weight: 500;
    margin-left: 15px;
`;

export const TotalSection = styled.div`
    margin-top: 15px;
`;

export const TotalRow = styled.div<{ isMainTotal?: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: ${props => props.isMainTotal ? '18px' : '14px'};
    font-weight: ${props => props.isMainTotal ? 'bold' : 'normal'};
`;

export const ConfirmButton = styled.button`
    background-color: #e6b325;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 15px;
    width: 100%;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    
    &:hover {
        background-color: #d4a520;
    }
`;