// date-operations.js
const { addDays, format } = require("date-fns");

function showDate() {
  const now = new Date();
  const future = addDays(now, 5);
  const formatted = format(future, "yyyy-MM-dd HH:mm:ss");

  console.log("📅 Current date:", now);
  console.log("➡️ +5 days:", formatted);
}

module.exports = showDate;
