import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { 
    PaymentContainer, 
    PaymentHeader, 
    PaymentTitle, 
    PaymentDescription, 
    PaymentOptions, 
    PaymentButton, 
    CardPagamentoContainer
} from './styles';

export function Pagamento() {
    return (
        <CardPagamentoContainer>
            <PaymentContainer>
                <PaymentHeader>
                    <PaymentTitle>
                        <CurrencyDollar size={24} color="#8047F8" />
                        Pagamento
                    </PaymentTitle>
                    <PaymentDescription>
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </PaymentDescription>
                </PaymentHeader>

                <PaymentOptions>
                    <PaymentButton type="button">
                        <CreditCard size={16} color="#8047F8" />
                        CARTÃO DE CRÉDITO
                    </PaymentButton>

                    <PaymentButton type="button">
                        <Bank size={16} color="#8047F8" />
                        CARTÃO DE DÉBITO
                    </PaymentButton>

                    <PaymentButton type="button">
                        <Money size={16} color="#8047F8" />
                        DINHEIRO
                    </PaymentButton>
            </PaymentOptions>
        </PaymentContainer>
        </CardPagamentoContainer>
    )
}