import React from 'react';
import { SuccessContainer } from './styles';
import { CardSuccess } from './CardSuccess';

export function Success(): React.ReactElement {
    return (
        <SuccessContainer>
            <div className="title-container">
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>

            <CardSuccess>
                
            </CardSuccess>
        </SuccessContainer>
    );
}