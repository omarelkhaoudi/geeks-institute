// date.js
function minutesLived(birthdate) {
  const now = new Date();
  const birth = new Date(birthdate);
  const diffMs = now - birth;
  const minutes = Math.floor(diffMs / (1000 * 60));

  return `You have lived approximately ${minutes.toLocaleString()} minutes.`;
}

module.exports = { minutesLived };
