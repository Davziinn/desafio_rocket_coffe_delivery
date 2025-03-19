import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import introImage from '../../../../assets/intro-image.svg'
import { 
    IntroContainer, 
    IntroContent, 
    Title, 
    Subtitle, 
    Features, 
    FeatureItem, 
    IconContainer,
    ImageContainer
} from './styles'

export function Intro() {
    return (
        <IntroContainer>
            <IntroContent>
                <div>
                <Title>
                    <strong>
                        Encontre o café perfeito para qualquer hora do dia
                    </strong>
                </Title>
                <Subtitle>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </Subtitle>

                <Features>
                    <FeatureItem>
                        <IconContainer variant="yellow-dark">
                            <ShoppingCart size={16} color="#fff" weight="fill" />
                        </IconContainer>
                        <span>Compra simples e segura</span>
                    </FeatureItem> 

                    <FeatureItem>
                        <IconContainer variant="gray">
                            <Package size={16} color="#fff" weight="fill" />
                        </IconContainer>
                        <span>Embalagem mantém o café intacto</span>
                    </FeatureItem>
                    
                    <FeatureItem>
                        <IconContainer variant="yellow">
                            <Timer size={16} color="#fff" weight="fill" />
                        </IconContainer>
                        <span>Entrega rápida e rastreada</span>
                    </FeatureItem>

                    <FeatureItem>
                        <IconContainer variant="purple">
                            <Coffee size={16} color="#fff" weight="fill" />
                        </IconContainer>
                        <span>O café chega fresquinho até você</span>
                    </FeatureItem>
                </Features>
                </div>

                <ImageContainer>
                    <img src={introImage} alt="Imagem de um copo de café com grãos de café" />
                </ImageContainer>
            </IntroContent>
        </IntroContainer>
    )
}