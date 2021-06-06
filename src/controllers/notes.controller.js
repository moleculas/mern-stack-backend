const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};
notesCtrl.getNote = async (req, res) => {
    const note = await Note.finfById(req.params.id);
    res.json(note);
};
notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    res.json('New Note added');
};
notesCtrl.updateNote = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        duration,
        author
    });
    res.json('Note Updated');
};
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
};

module.exports = notesCtrl;