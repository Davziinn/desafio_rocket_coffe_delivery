export function formatPrice(value: number): string {
    const formattedValue = value.toFixed(2);
    
    return formattedValue.replace('.', ',');
}