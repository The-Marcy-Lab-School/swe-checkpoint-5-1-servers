const Bookmark = require('../models/Bookmark');

const listBookmarks = (req, res) => {
  const bookmarks = Bookmark.list();
  res.send(bookmarks);
};

const getBookmark = (req, res) => {
  const { id } = req.params;
  const bookmark = Bookmark.find(Number(id));
  if (!bookmark) {
    return res.status(404).send({ message: `Bookmark with id ${id} not found` });
  }
  res.send(bookmark);
};

// INTENTIONAL DESIGN ISSUE: This controller formats the data before sending
// the response. It adds a "createdAt" field that should be the model's
// responsibility (the model should handle data structure, not the controller).
const createBookmark = (req, res) => {
  const { title, url } = req.body;
  if (!title || !url) {
    return res.status(400).send({ message: 'Title and URL are required' });
  }
  const newBookmark = Bookmark.create(title, url);
  newBookmark.createdAt = new Date().toISOString();
  res.status(201).send(newBookmark);
};

const updateBookmark = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ message: 'Title is required' });
  }
  const updated = Bookmark.update(Number(id), title);
  if (!updated) {
    return res.status(404).send({ message: `Bookmark with id ${id} not found` });
  }
  res.send(updated);
};

const deleteBookmark = (req, res) => {
  const { id } = req.params;
  const deleted = Bookmark.delete(Number(id));
  if (!deleted) {
    return res.status(404).send({ message: `Bookmark with id ${id} not found` });
  }
  res.send(deleted);
};

module.exports = {
  listBookmarks,
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
};
