import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultSearchEngines = {
  default: 0,
  engines: [
    {
      id: 0,
      name: 'DuckDuckGo',
      alias: 'd:',
      url: 'https://duckduckgo.com/?q='
    }
  ]
};

const initSearchEngines =
  browser && localStorage?.searchEngines
    ? JSON.parse(localStorage.searchEngines)
    : defaultSearchEngines;

export const localSearchEngines = writable(initSearchEngines);

localSearchEngines.subscribe((value) => {
  if (browser) {
    localStorage.searchEngines = JSON.stringify(value);
  }
});
