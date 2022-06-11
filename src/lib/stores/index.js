import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initBookmarks = browser && localStorage?.bookmarks ? JSON.parse(localStorage.bookmarks) : [];

export const localBookmarks = writable(initBookmarks);

localBookmarks.subscribe((value) => {
  if (browser) {
    localStorage.bookmarks = JSON.stringify(value);
  }
});
