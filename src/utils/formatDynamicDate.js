import moment from "moment";

const formatDynamicDate = (dateString) => {
  const date = moment(dateString);
  if (date.isSame(moment(), "day")) {
    return date.format("HH:mm");
  }
  if (date.isSame(moment().subtract(1, "days"), "day")) {
    return `Yesterday, ${date.format("HH:mm")}`;
  }
  return date.format("D MMMM, HH:mm");
};

const getTime = (dateString) => moment(dateString).format("HH:mm");
const getDateFormatted = (dateString) => moment(dateString).format("D MMMM, YYYY");

export { formatDynamicDate, getTime, getDateFormatted };
