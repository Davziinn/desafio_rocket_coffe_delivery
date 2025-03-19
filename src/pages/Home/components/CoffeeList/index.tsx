import { CoffeeCard } from "../CoffeeCard";
import { CoffeeGrid, Title } from "./styles";

export function CoffeeList() {
    return (
        <>
            <Title>
                Nossos cafés
            </Title>

            <CoffeeGrid>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeGrid>
        </>
    )
}