import React, { useState, ChangeEvent } from 'react';
import { MapPinLine } from '@phosphor-icons/react';
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
    LocationIcon,
    ErrorMessage
} from './styles';
import { useCart } from '../../../../context/CartContext';

interface AddressFormData {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
}

interface FormErrors {
    [key: string]: string | null;
}

export function Endereco() {
    const { setAddressData } = useCart();
    const [formData, setFormData] = useState<AddressFormData>({
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
    });
    
    const [errors, setErrors] = useState<FormErrors>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateNumberField = (value: string, fieldName: string): string | null => {
        if (!/^\d+$/.test(value)) {
            return `${fieldName} deve conter apenas números`;
        }
        return null;
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};
        
        // Required fields
        if (!formData.cep) newErrors.cep = 'CEP é obrigatório';
        if (!formData.street) newErrors.street = 'Rua é obrigatória';
        if (!formData.number) newErrors.number = 'Número é obrigatório';
        if (!formData.neighborhood) newErrors.neighborhood = 'Bairro é obrigatório';
        if (!formData.city) newErrors.city = 'Cidade é obrigatória';
        if (!formData.state) newErrors.state = 'UF é obrigatória';
        
        // Number validation
        if (formData.cep) {
            const cepError = validateNumberField(formData.cep, 'CEP');
            if (cepError) newErrors.cep = cepError;
        }
        
        if (formData.number) {
            const numberError = validateNumberField(formData.number, 'Número');
            if (numberError) newErrors.number = numberError;
        }
        
        setErrors(newErrors);
        
        // Save data to context if valid
        if (Object.keys(newErrors).length === 0) {
            setAddressData(formData);
            return true;
        }
        
        return false;
    };

    // Adicionar função para validar ao perder o foco
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // Validar campos numéricos
        if (name === 'cep' || name === 'number') {
            if (!value) {
                setErrors(prev => ({
                    ...prev,
                    [name]: `${name === 'cep' ? 'CEP' : 'Número'} é obrigatório`
                }));
            } else {
                const error = validateNumberField(value, name === 'cep' ? 'CEP' : 'Número');
                if (error) {
                    setErrors(prev => ({
                        ...prev,
                        [name]: error
                    }));
                }
            }
        } 
        // Validar campos obrigatórios
        else if (name !== 'complement' && !value) {
            setErrors(prev => ({
                ...prev,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} é obrigatório`
            }));
        }
        
        // Validar e salvar no contexto
        validateForm();
    };

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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <MediumInput 
                            type="text" 
                            placeholder="CEP" 
                            name="cep"
                            value={formData.cep}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={errors.cep ? 'error' : ''}
                            maxLength={8}
                        />
                        {errors.cep && <ErrorMessage>{errors.cep}</ErrorMessage>}
                    </div>
                </InputGroup>
                
                <InputGroup className="street-row">
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <LargeInput 
                            type="text" 
                            placeholder="Rua" 
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={errors.street ? 'error' : ''}
                        />
                        {errors.street && <ErrorMessage>{errors.street}</ErrorMessage>}
                    </div>
                </InputGroup>
                
                <InputGroup className="number-complement-row">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <MediumInput 
                            type="text" 
                            placeholder="Número" 
                            name="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={errors.number ? 'error' : ''}
                        />
                        {errors.number && <ErrorMessage>{errors.number}</ErrorMessage>}
                    </div>
                    
                    <div className="complemento-wrapper" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <LargeInput 
                            type="text" 
                            placeholder="Complemento" 
                            name="complement"
                            value={formData.complement}
                            onChange={handleInputChange}
                        />
                        <OptionalLabel>Opcional</OptionalLabel>
                    </div>
                </InputGroup>
                
                <InputGroup className="city-info-row">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <MediumInput 
                            type="text" 
                            placeholder="Bairro" 
                            name="neighborhood"
                            value={formData.neighborhood}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={errors.neighborhood ? 'error' : ''}
                        />
                        {errors.neighborhood && <ErrorMessage>{errors.neighborhood}</ErrorMessage>}
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <MediumInput 
                            type="text" 
                            placeholder="Cidade" 
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={errors.city ? 'error' : ''}
                            style={{ width: '100%' }}
                        />
                        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <SmallInput 
                            type="text" 
                            placeholder="UF" 
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={errors.state ? 'error' : ''}
                            maxLength={2}
                        />
                        {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
                    </div>
                </InputGroup>
            </AddressForm>
        </AddressContainer>
    );
}