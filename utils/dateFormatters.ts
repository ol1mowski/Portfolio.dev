/**
 * Formatuje datę do postaci polskiej
 * @param dateString - ciąg znaków reprezentujący datę (format ISO lub YYYY-MM-DD)
 * @returns sformatowana data w formacie "DD.MM.YYYY"
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.error('Nieprawidłowy format daty:', dateString);
      return dateString;
    }

    // Formatowanie do postaci DD.MM.YYYY
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  } catch (error) {
    console.error('Błąd podczas formatowania daty:', error);
    return dateString;
  }
};
