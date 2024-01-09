export const dateFormat = (value) => {
  const date = value?.split("T")[0]?.split("-");

  const getMonth = (item) => {
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
    const newItem = parseInt(item, 10) - 1;
    return months[newItem];
  };

  return date[2] + " " + getMonth(date[1]) + " " + date[0];
};
