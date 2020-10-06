export default (date) =>
  date
    .toString()
    .match(/\d{2}:/)[0]
    .split(':')[0];
