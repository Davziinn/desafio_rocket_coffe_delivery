import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin'
import logoCoffe from '../../assets/logo-coffe.svg'
import { HeaderContainer, Logo, CartButton, Location, RightSection, Span, CartButtonWrapper, CartCount } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const { cartQuantity } = useCart();
    const navigate = useNavigate()
    
    return (
        <>
            <HeaderContainer>
                <Logo onClick={() => navigate("/")} src={logoCoffe} alt="" />
                
                <RightSection>
                    <Location>
                            <MapPin size={24} color="#8047F8" weight="fill" />
                        <Span>
                            Porto Alegre, RS
                        </Span>
                    </Location>
                    <CartButtonWrapper>
                        <CartButton to="/checkout">
                            <ShoppingCart size={24} color="#C47F17" weight="fill" />
                        </CartButton>
                        {cartQuantity > 0 && <CartCount>{cartQuantity}</CartCount>}
                    </CartButtonWrapper>
                </RightSection>
            </HeaderContainer>
        </>
    )
}