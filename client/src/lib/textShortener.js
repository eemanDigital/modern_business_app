/**
 * Shortens the given text to the specified length and appends an ellipsis if the text exceeds that length.
 * @param {string} text - The text to shorten.
 * @param {number} maxLength - The maximum length of the shortened text.
 * @returns {string} - The shortened text.
 */
export const shortenText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};
