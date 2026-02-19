////////////////////////////////////////////////
// Fetch Helpers
////////////////////////////////////////////////

const fetchBookmarks = async () => {
  try {
    const response = await fetch('/api/bookmarks');
    if (!response.ok) throw new Error('Failed to fetch bookmarks');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createBookmark = async (title, url) => {
  try {
    const response = await fetch('/api/bookmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, url }),
    });
    if (!response.ok) throw new Error('Failed to create bookmark');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteBookmark = async (id) => {
  try {
    const response = await fetch(`/api/bookmarks/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete bookmark');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

////////////////////////////////////////////////
// DOM Helpers
////////////////////////////////////////////////

const renderBookmarks = (bookmarks) => {
  const list = document.querySelector('#bookmarks-list');
  const count = document.querySelector('#bookmark-count');

  list.innerHTML = '';
  count.textContent = bookmarks.length;

  bookmarks.forEach((bookmark) => {
    const li = document.createElement('li');

    const link = document.createElement('a');
    link.href = bookmark.url;
    link.textContent = bookmark.title;
    link.target = '_blank'; // open the link in a new tab

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.dataset.bookmarkId = bookmark.id;

    li.append(link, deleteBtn);
    list.append(li);
  });
};

////////////////////////////////////////////////
// Event Handlers
////////////////////////////////////////////////

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const form = event.target
  const title = form.title.value;
  const url = form.url.value;

  // Post the bookmark
  await createBookmark(title, url);

  // Get the updated set of bookmarks and rerender
  const updated = await fetchBookmarks();
  renderBookmarks(updated);

  form.reset();
};

const handleDeleteBookmarkClick = async (event) => {
  const clickedBtn = event.target.closest('.delete-btn');
  if (!clickedBtn) return;

  await deleteBookmark(clickedBtn.dataset.bookmarkId);
  const updated = await fetchBookmarks();
  renderBookmarks(updated);
};

////////////////////////////////////////////////
// Main Logic
////////////////////////////////////////////////

const main = async () => {
  // Fetch and render bookmarks on page load
  const bookmarks = await fetchBookmarks();
  renderBookmarks(bookmarks);

  // On form submission, post a new bookmark
  document.querySelector('#bookmark-form')
    .addEventListener('submit', handleFormSubmit);

  // Event delegation to handle bookmark deletion
  document.querySelector('#bookmarks-list')
    .addEventListener('click', handleDeleteBookmarkClick);
};

main();
