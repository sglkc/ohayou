import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initBookmarks = browser && localStorage?.bookmark ? JSON.parse(localStorage.bookmark) : [];

export const localBookmarks = writable(initBookmarks);

localBookmarks.subscribe((value) => {
  if (browser) {
    localStorage.bookmarks = JSON.stringify(value);
  }
});
