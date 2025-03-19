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

import coffeeTrad from '../../../../assets/coffe-tradicional.svg'
import { Trash } from '@phosphor-icons/react';

export function CardSelecionado() {
return (
    <Card>
        <CartItem>
            <ProductImage src={coffeeTrad} alt="Expresso Tradicional" />
            <ProductInfo>
                <ProductName>
                    Expresso Tradicional
                </ProductName>
                <QuantityControl>
                    <QuantityButton>
                        −
                    </QuantityButton>

                    <QuantityText>
                        1
                    </QuantityText>

                    <QuantityButton color="#8047F8">
                        +
                    </QuantityButton>

                    <RemoveButton>
                        <Trash color="#8047F8" size={32} style={{ padding: '5px' }} />
                        REMOVER
                    </RemoveButton>
                </QuantityControl>
            </ProductInfo>
            <Price>R$ 9,90</Price>
        </CartItem>

        <CartItem>
            <ProductImage src={coffeeTrad} alt="Expresso Tradicional" />
            <ProductInfo>
                <ProductName>
                    Expresso Tradicional
                </ProductName>
                <QuantityControl>
                    <QuantityButton>
                        −
                    </QuantityButton>

                    <QuantityText>
                        1
                    </QuantityText>

                    <QuantityButton color="#8047F8">
                        +
                    </QuantityButton>

                    <RemoveButton>
                        <Trash color="#8047F8" size={32} style={{ padding: '5px' }} />
                        REMOVER
                    </RemoveButton>
                </QuantityControl>
            </ProductInfo>
            <Price>R$ 9,90</Price>
        </CartItem>

        <TotalSection>
            <TotalRow>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
            </TotalRow>
            <TotalRow>
                <span>Entrega</span>
                <span>R$ 3,50</span>
            </TotalRow>
            <TotalRow isMainTotal>
                <span>Total</span>
                <span>R$ 33,20</span>
            </TotalRow>
        </TotalSection>

        <ConfirmButton>Confirmar Pedido</ConfirmButton>
        </Card>
    );
}