const db = require("../config/db");

const Question = {
  getAll: (callback) => {
    db.all("SELECT * FROM questions", [], callback);
  },
  getById: (id, callback) => {
    db.get("SELECT * FROM questions WHERE id = ?", [id], callback);
  }
};

module.exports = Question;
