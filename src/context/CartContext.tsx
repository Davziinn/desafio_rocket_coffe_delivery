import { createContext, useState, useContext, ReactNode } from 'react';

interface Coffee {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface AddressData {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
}

interface CartContextData {
    cartItems: Coffee[];
    addToCart: (coffee: Coffee) => void;
    removeFromCart: (coffeeId: string) => void;
    updateCartItemQuantity: (coffeeId: string, quantity: number) => void;
    cartQuantity: number;
    cartTotal: number;
    addressData: AddressData | null;
    setAddressData: (data: AddressData) => void;
    paymentMethod: string;
    setPaymentMethod: (method: string) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<Coffee[]>([]);
    const [addressData, setAddressData] = useState<AddressData | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<string>('Cartão de Crédito');

    function addToCart(coffee: Coffee) {
        const coffeeAlreadyInCart = cartItems.findIndex(
            item => item.id === coffee.id
        );

        if (coffeeAlreadyInCart >= 0) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[coffeeAlreadyInCart].quantity += coffee.quantity;
            setCartItems(updatedCartItems);
        } else {
            setCartItems(prevState => [...prevState, coffee]);
        }
    }

    function removeFromCart(coffeeId: string) {
        const filteredCart = cartItems.filter(item => item.id !== coffeeId);
        setCartItems(filteredCart);
    }

    function updateCartItemQuantity(coffeeId: string, quantity: number) {
        if (quantity <= 0) {
            removeFromCart(coffeeId);
            return;
        }

        const updatedCartItems = cartItems.map(item => 
            item.id === coffeeId ? { ...item, quantity } : item
        );
        
        setCartItems(updatedCartItems);
    }

    const cartQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                addToCart, 
                removeFromCart, 
                updateCartItemQuantity, 
                cartQuantity,
                cartTotal,
                addressData,
                setAddressData,
                paymentMethod,
                setPaymentMethod,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);
    
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    
    return context;
}