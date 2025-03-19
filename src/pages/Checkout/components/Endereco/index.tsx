import { 
    AddressContainer, 
    AddressHeader, 
    HeaderTitle, 
    HeaderSubtitle, 
    AddressForm, 
    InputGroup, 
    SmallInput,
    MediumInput,
    LargeInput,
    OptionalLabel,
    LocationIcon
} from './styles';
import { MapPinLine } from '@phosphor-icons/react';

export function Endereco() {
    return (
        <AddressContainer>
            <AddressHeader>
                <LocationIcon>
                    <MapPinLine size={22} color="#C47F17" />
                </LocationIcon>
                <div>
                    <HeaderTitle>Endereço de Entrega</HeaderTitle>
                    <HeaderSubtitle>Informe o endereço onde deseja receber seu pedido</HeaderSubtitle>
                </div>
            </AddressHeader>
    
            <AddressForm>
                <InputGroup className="cep-row">
                    <MediumInput type="text" placeholder="CEP" />
                </InputGroup>
                
                <InputGroup className="street-row">
                    <LargeInput type="text" placeholder="Rua" />
                </InputGroup>
                
                <InputGroup className="number-complement-row">
                    <MediumInput type="text" placeholder="Número" />
                    <div className="complemento-wrapper">
                    <LargeInput type="text" placeholder="Complemento" />
                    <OptionalLabel>Opcional</OptionalLabel>
                    </div>
                </InputGroup>
                
                <InputGroup className="city-info-row">
                    <MediumInput type="text" placeholder="Bairro" />
                    <MediumInput type="text" placeholder="Cidade" />
                    <SmallInput type="text" placeholder="UF" />
                </InputGroup>
            </AddressForm>
        </AddressContainer>
    );
}