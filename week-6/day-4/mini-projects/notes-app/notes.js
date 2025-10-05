const fs = require("fs");
const _ = require("lodash");

const notesFile = "notes-data.json";

// Helper: load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(notesFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

// Helper: save notes
const saveNotes = (notes) => {
  fs.writeFileSync(notesFile, JSON.stringify(notes));
};

// Add note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = _.find(notes, { title });

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("Note added!");
  } else {
    console.log("Note already exists");
  }
};

// List all notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(`Printing ${notes.length} note(s):`);
  notes.forEach((note) => console.log(`- ${note.title}`));
};

// Read a note
const readNote = (title) => {
  const notes = loadNotes();
  const note = _.find(notes, { title });

  if (note) {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note not found");
  }
};

// Remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length === filteredNotes.length) {
    console.log("Note not found");
  } else {
    saveNotes(filteredNotes);
    console.log("Note removed!");
  }
};

module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote,
};
