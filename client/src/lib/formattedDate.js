function formatDate(date) {
  const newDate = new Date(date);

  // Check if the date is valid
  if (isNaN(newDate.getTime())) {
    return 'Invalid Date';
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    newDate
  );

  return formattedDate;
}

export default formatDate;
