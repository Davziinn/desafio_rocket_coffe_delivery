import { CardContainer, CoffeeImage, Tag, Name, Description, Footer, Price, QuantityControls, CartButton, QuantityContainer } from "./styles";
import { ShoppingCart, Minus, Plus } from '@phosphor-icons/react';
import coffeTradicional from '../../../../assets/coffe-tradicional.svg';
import { useState } from "react";
import { useCart } from "../../../../context/CartContext";

export function CoffeeCard() {
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();

    function handleCountPlusCoffee(): void {
        setCount((prev) => prev + 1);
    }

    function handleCountMinusCoffeee(): void {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    }

    function handleAddToCart(): void {
        const coffeeToAdd = {
            id: 'traditional-espresso', // Unique identifier
            name: 'Expresso Tradicional',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 9.90,
            image: coffeTradicional,
            quantity: count
        };
        
        addToCart(coffeeToAdd);
    }

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
                        <button onClick={handleCountMinusCoffeee}>
                            <Minus size={14} weight="bold" />
                        </button>
                        
                        <span>{count}</span>
                        
                        <button onClick={handleCountPlusCoffee}>
                            <Plus size={14} weight="bold" />
                        </button>
                    </QuantityControls>
                
                    <CartButton onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </CartButton>
                </QuantityContainer>
            </Footer>
        </CardContainer>
    );
}