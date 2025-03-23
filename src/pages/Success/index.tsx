import React, { useEffect } from 'react';
import { SuccessContainer } from './styles';
import { CardSuccess } from './CardSuccess';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export function Success(): React.ReactElement {
    const navigate = useNavigate();
    const { addressData, clearCart } = useCart();
    
    useEffect(() => {
        if (!addressData) {
            navigate('/');
        }
        
        return () => {
            clearCart();
        };
    }, [addressData, navigate, clearCart]);
    
    if (!addressData) {
        return null as unknown as React.ReactElement;
    }

    return (
        <SuccessContainer>
            <div className="title-container">
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>

            <CardSuccess />
        </SuccessContainer>
    );
}