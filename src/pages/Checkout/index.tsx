import { CardSelecionado } from "./components/CardSelecionado";
import { Endereco } from "./components/Endereco";
import { Pagamento } from "./components/Pagamento";
import { 
    CheckoutContainer, 
    TitleCard, 
    CheckoutContent, 
    OrderDetailsColumn, 
    OrderFormColumn 
} from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutContent>
                <OrderFormColumn>
                    <TitleCard>Complete seu pedido</TitleCard>
                    <Endereco />
                    <Pagamento />
                </OrderFormColumn>
                
                <OrderDetailsColumn>
                    <TitleCard>Cafés selecionados</TitleCard>
                    <CardSelecionado />
                </OrderDetailsColumn>
            </CheckoutContent>
        </CheckoutContainer>
    )
}