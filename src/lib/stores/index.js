import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initBookmarks = browser && localStorage?.bookmarks ? JSON.parse(localStorage.bookmarks) : [];
const initSearchEngines =
  browser && localStorage?.searchEngines
    ? JSON.parse(localStorage.searchEngines)
    : {
        default: 0,
        engines: [{ id: 0, name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' }]
      };

export const localBookmarks = writable(initBookmarks);
export const localSearchEngines = writable(initSearchEngines);

localBookmarks.subscribe((value) => {
  if (browser) {
    localStorage.bookmarks = JSON.stringify(value);
  }
});

localSearchEngines.subscribe((value) => {
  if (browser) {
    localStorage.searchEngines = JSON.stringify(value);
  }
});
