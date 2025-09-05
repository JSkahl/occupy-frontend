export const textShortener = (text, qnt) => {
    if (text.length > qnt) {
        return text.slice(0, qnt) + "..."
    }
    return text
} 
