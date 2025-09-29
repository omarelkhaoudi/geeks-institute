// date.js

function nextHoliday() {
  const now = new Date();

  // Hardcode the holiday (example: Christmas 🎄 on Dec 25)
  const holiday = new Date(now.getFullYear(), 11, 25); // December = 11 (0-indexed)
  const holidayName = "Christmas 🎄";

  // If holiday already passed this year → take next year
  if (holiday < now) {
    holiday.setFullYear(now.getFullYear() + 1);
  }

  // Calculate difference
  const diffMs = holiday - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const diffSeconds = Math.floor((diffMs / 1000) % 60);

  return {
    today: now.toLocaleString(),
    holiday: holidayName,
    holidayDate: holiday.toLocaleDateString(),
    remaining: `${diffDays} days, ${diffHours}:${diffMinutes}:${diffSeconds}`
  };
}

module.exports = nextHoliday;
