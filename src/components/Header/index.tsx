import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin'
import logoCoffe from '../../assets/logo-coffe.svg'
import { HeaderContainer, Logo, CartButton, Location, RightSection, Span } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

export function Header () {
    return (
        <>
            <HeaderContainer>
                <Logo src={logoCoffe} alt="" />
                
                <RightSection>
                    <Location>
                            <MapPin size={24} color="#8047F8" weight="fill" />
                        <Span>
                            Porto Alegre, RS
                        </Span>
                    </Location>
                    <CartButton>
                        <ShoppingCart size={24} color="#C47F17" weight="fill" />
                    </CartButton>
                </RightSection>
            </HeaderContainer>
        </>
    )
}