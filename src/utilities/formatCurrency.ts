const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "COL", 
    style: "currency",
})

export function formatCurrency(number: number) {
    const removerSimbolo = CURRENCY_FORMATTER.format(number);
    return removerSimbolo;

}
