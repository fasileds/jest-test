const moment = require("moment");
const nearestNextValidDate = (dateString) => {
  const date = moment(dateString, "YYYY-MM-DD", true);
  if (!date.isValid()) throw new Error(`Invalid date: ${dateString}`);
  return date.format("YYYY-MM-DD");
};

const nearestPrevValidDate = (dateString) => {
  const date = moment(dateString, "YYYY-MM-DD", true);
  if (!date.isValid()) throw new Error(`Invalid date: ${dateString}`);
  return date.format("YYYY-MM-DD");
};

const calcBillingPeriods = (cutoffDate, periodYear) => {
  const regex = /^2\d{3}$/;
  const invalid = !regex.test(periodYear);
  if (invalid) return false;

  if (cutoffDate < 1 || cutoffDate > 31) return false;

  const months = [...Array(12).keys()].map((i) => i + 1);

  const tryDates = months.map((m) => {
    const end_day = cutoffDate.toString().padStart(2, "0");
    const start_day = cutoffDate.toString().padStart(2, "0");
    const end_month = m.toString().padStart(2, "0");
    const start_month = (m - 1 < 1 ? 12 : m - 1).toString().padStart(2, "0");
    const end_year = periodYear;
    const start_year = m - 1 < 1 ? end_year - 1 : end_year;

    return {
      start_date: nearestNextValidDate(
        `${start_year}-${start_month}-${start_day}`
      ),
      end_date: nearestPrevValidDate(`${end_year}-${end_month}-${end_day}`),
      month: moment(`${periodYear}-${m.toString().padStart(2, "0")}-01`).format(
        "YYYY-MM-01"
      ),
    };
  });

  return tryDates;
};

module.exports = { calcBillingPeriods };
