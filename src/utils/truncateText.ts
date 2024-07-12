export const truncateText = (text: string) => {
    const charLimit = 200;

    // Si el texto es más largo que el límite, truncar y añadir '...'
    if (text.length > charLimit) {
        return text.substring(0, charLimit) + "...";
    }

    // Si no, devolver el texto original
    return text;
};
