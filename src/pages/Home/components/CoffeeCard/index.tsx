import { CardContainer, CoffeeImage, Tag, Name, Description, Footer, Price, QuantityControls, CartButton, QuantityContainer } from "./styles";
import { ShoppingCart, Minus, Plus } from '@phosphor-icons/react';

import coffeTradicional from '../../../../assets/coffe-tradicional.svg'

export function CoffeeCard() {
return (
        <CardContainer>
            <CoffeeImage src={coffeTradicional} alt="Xícara de café vista de cima" />
            
            <Tag>TRADICIONAL</Tag>
            
            <Name>Expresso Tradicional</Name>
            
            <Description>
                Expresso diluído, menos intenso que o tradicional
            </Description>
            
            <Footer>
                <Price>
                    <span>R$</span>
                    <strong>9,90</strong>
                </Price>
                
                <QuantityContainer>
                    <QuantityControls>
                        <button>
                            <Minus size={14} weight="bold" />
                        </button>
                        
                        <span>1</span>
                        
                        <button>
                            <Plus size={14} weight="bold" />
                        </button>
                    </QuantityControls>
                
                    <CartButton>
                        <ShoppingCart size={22} weight="fill" />
                    </CartButton>
                </QuantityContainer>
            </Footer>
        </CardContainer>
    );
}