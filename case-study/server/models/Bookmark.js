// This helper generates unique IDs for each bookmark
let id = 0;
const getId = () => ++id;

// The "database" — an in-memory array of bookmarks
const bookmarks = [
  { id: getId(), title: 'Marcy Lab School', url: 'https://www.marcylabschool.org' },
  { id: getId(), title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
  { id: getId(), title: 'Express Docs', url: 'https://expressjs.com' },
];

class Bookmark {
  static create(title, url) {
    const newBookmark = { id: getId(), title, url };
    bookmarks.push(newBookmark);
    return newBookmark;
  }

  static list() {
    return [...bookmarks];
  }

  static find(id) {
    return bookmarks.find((bookmark) => bookmark.id === id);
  }

  static update(id, title) {
    const bookmark = Bookmark.find(id);
    if (!bookmark) return null;
    bookmark.title = title;
    return bookmark;
  }

  static delete(id) {
    const index = bookmarks.findIndex((bookmark) => bookmark.id === id);
    if (index < 0) return null;
    return bookmarks.splice(index, 1)[0];
  }
}

module.exports = Bookmark;
