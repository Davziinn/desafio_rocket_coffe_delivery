import {
    Card,
    CartItem,
    ProductImage,
    ProductInfo,
    ProductName,
    QuantityControl,
    QuantityButton,
    QuantityText,
    RemoveButton,
    Price,
    TotalSection,
    TotalRow,
    ConfirmButton
} from './styles';

import { Trash } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import { formatPrice } from '../../../../utils/formatPrice';

export function CardSelecionado() {
    const navigate = useNavigate();
    const { 
        cartItems, 
        removeFromCart, 
        updateCartItemQuantity,
        cartTotal 
    } = useCart();

    const deliveryCost = cartItems.length > 0 ? 3.5 : 0;
    const totalWithDelivery = cartTotal + deliveryCost;

    function handleIncrementQuantity(id: string, currentQuantity: number) {
        updateCartItemQuantity(id, currentQuantity + 1);
    }

    function handleDecrementQuantity(id: string, currentQuantity: number) {
        if (currentQuantity > 1) {
            updateCartItemQuantity(id, currentQuantity - 1);
        }
    }

    return (
        <Card>
            {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>Seu carrinho está vazio</div>
            ) : (
                <>
                    {cartItems.map(item => (
                        <CartItem key={item.id}>
                            <ProductImage src={item.image} alt={item.name} />
                            <ProductInfo>
                                <ProductName>
                                    {item.name}
                                </ProductName>
                                <QuantityControl>
                                    <QuantityButton 
                                        onClick={() => handleDecrementQuantity(item.id, item.quantity)}
                                    >
                                        −
                                    </QuantityButton>

                                    <QuantityText>
                                        {item.quantity}
                                    </QuantityText>

                                    <QuantityButton 
                                        color="#8047F8"
                                        onClick={() => handleIncrementQuantity(item.id, item.quantity)}
                                    >
                                        +
                                    </QuantityButton>

                                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                                        <Trash color="#8047F8" size={16} />
                                        REMOVER
                                    </RemoveButton>
                                </QuantityControl>
                            </ProductInfo>
                            <Price>R$ {formatPrice(item.price * item.quantity)}</Price>
                        </CartItem>
                    ))}

                    <TotalSection>
                        <TotalRow>
                            <span>Total de itens</span>
                            <span>R$ {formatPrice(cartTotal)}</span>
                        </TotalRow>
                        <TotalRow>
                            <span>Entrega</span>
                            <span>R$ {formatPrice(deliveryCost)}</span>
                        </TotalRow>
                        <TotalRow isMainTotal>
                            <span>Total</span>
                            <span>R$ {formatPrice(totalWithDelivery)}</span>
                        </TotalRow>
                    </TotalSection>

                    <ConfirmButton onClick={() => navigate("/success")}>
                        Confirmar Pedido
                    </ConfirmButton>
                </>
            )}
        </Card>
    );
}