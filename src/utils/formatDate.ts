export function formatDate(dateString: string): string {
    // Crear un arreglo con los nombres de los meses
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // Convertir el string de fecha a un objeto Date
    const date = new Date(dateString);

    // Obtener el mes y el día del objeto Date
    const month = months[date.getMonth()];
    const day = date.getDate();

    // Formatear el día para agregar un cero si solo tiene un dígito
    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    // Retornar el formato deseado
    return `${month}\n${formattedDay}`;
}
