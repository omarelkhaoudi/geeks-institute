// date.js
function timeUntilNewYear() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1); // Jan 1 next year

  const diffMs = newYear - now;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return `The 1st January is in ${days} days and ${hours}:${minutes}:${seconds} hours`;
}

module.exports = { timeUntilNewYear };
