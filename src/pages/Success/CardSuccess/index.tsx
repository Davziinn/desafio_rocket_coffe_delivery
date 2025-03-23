import React from 'react';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import carinhaNaMotinha from '../../../assets/carinha_na_motinha.svg';
import { ImageContainer, InfoWithIcon, OrderInfo, OrderInfoContainer } from './styles';
import { useCart } from '../../../context/CartContext';

export function CardSuccess() {
    const { addressData, paymentMethod } = useCart();
    
    if (!addressData) return null;

    return (
        <>
            <OrderInfoContainer>
                <div className="info-section">
                    <InfoWithIcon iconBg="#8047F8">
                        <MapPin weight="fill" size={32} color="#FFFFFF" />
                        <OrderInfo>
                            <span>Entrega em <strong>{addressData.street}, {addressData.number}</strong></span>
                            <span>{addressData.neighborhood} - {addressData.city}, {addressData.state}</span>
                            {addressData.complement && <span>Complemento: {addressData.complement}</span>}
                        </OrderInfo>
                    </InfoWithIcon>

                    <InfoWithIcon iconBg="#DBAC2C">
                        <Timer weight="fill" size={32} color="#FFFFFF" />
                        <OrderInfo>
                            <span>Previsão de entrega</span>
                            <span><strong>20 min - 30 min</strong></span>
                        </OrderInfo>
                    </InfoWithIcon>

                    <InfoWithIcon iconBg="#C47F17">
                        <CurrencyDollar weight="fill" size={32} color="#FFFFFF" />
                        <OrderInfo>
                            <span>Pagamento na entrega</span>
                            <span><strong>{paymentMethod}</strong></span>
                        </OrderInfo>
                    </InfoWithIcon>
                </div>

                <ImageContainer>
                    <img src={carinhaNaMotinha} alt="Entregador de moto" />
                </ImageContainer>
            </OrderInfoContainer>
        </>
    );
}