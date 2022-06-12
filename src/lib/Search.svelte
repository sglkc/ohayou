<script>
  import { slide } from 'svelte/transition';
  import { localSearchEngines } from '$lib/stores';

  $: localSearchEngines.set(searchEngines);
  $: defaultSearchEngine = searchEngines.engines[searchEngines.default];

  let searchEngines = $localSearchEngines;
  let searchEngineId = undefined;
  let searchEngineName = '';
  let searchEngineUrl = 'https://';
  let settingsForm = false;
  let keyword = '';
  let urlfocus = false;

  async function search(event) {
    if (!keyword.length) return;
    const encoded = encodeURIComponent(keyword);
    window.open(defaultSearchEngine.url + encoded, '_self');
  }

  function addSearchEngine() {
    const id = searchEngines.engines.length || 0;

    searchEngines.engines[id] = { id, name: '', url: '' };
    searchEngineId = id;
  }

  function submitSearchEngine(event) {
    const id = searchEngineId ?? searchEngines.engines.length;

    searchEngines.engines[id] = {
      id,
      name: searchEngineName,
      url: searchEngineUrl
    };
    searchEngineId = undefined;
    searchEngineName = '';
    searchEngineUrl = 'https://';
  }

  function removeSearchEngine(id) {
    searchEngines.engines.splice(id, 1);
    searchEngines.engines = searchEngines.engines;
  }

  function editSearchEngine(engine) {
    searchEngineId = engine.id;
    searchEngineName = engine.name;
    searchEngineUrl = engine.url;
  }
</script>

<div class="flex flex-col justify-center">
  <form on:submit|preventDefault={search} class="flex justify-center font-serif" autocomplete="off">
    <input
      bind:value={keyword}
      class="bg-white/75 focus:bg-white rounded-l-md p-2 max-w-[70vw]"
      type="text"
      placeholder="Search {defaultSearchEngine.name}"
    />
    <button
      on:click={() => (settingsForm = !settingsForm)}
      class="bg-white/75 hover:bg-white/90 px-3 transition-colors"
      type="button"
    >
      <i class="fa fa-gear text-black/50" />
    </button>
    <button class="bg-white/75 hover:bg-white rounded-r-md px-4 transition-colors" type="submit">
      <i class="fa fa-search" />
    </button>
  </form>
  {#if settingsForm}
    <form
      transition:slide
      on:submit|preventDefault={submitSearchEngine}
      class="px-4 py-2 bg-sky-200/50 rounded mx-2 mt-3"
      autocomplete="off"
    >
      <div class="pb-2 flex justify-between">
        <span class="text-sm my-auto">Select default search engine</span>
        <select
          bind:value={searchEngines.default}
          class="px-2 py-1 text-sm text-gray-700 bg-slate-100 border-2 border-solid border-gray-300 rounded focus:border-blue-400 focus:outline-none"
        >
          {#each searchEngines.engines as engine, id (id)}
            <option value={id}>{engine.name}</option>
          {/each}
        </select>
      </div>
      <div class="max-h-48 overflow-y-auto">
        <table class="min-w-full text-left border-1 text-sm text-gray-700">
          <thead class="font-medium">
            <tr>
              <th class="py-2 px-1 text-center">#</th>
              <th>Name</th>
              <th>URL</th>
              <th class="text-right">
                <button on:click={addSearchEngine} type="button">
                  <i class="fa fa-plus mx-auto" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {#each searchEngines.engines as engine, id (id)}
              {#if searchEngineId === id}
                <tr class="text-gray-700 relative">
                  {#if !urlfocus}
                    <td class="py-2 text-center">{id + 1}.</td>
                    <td class="max-w-xs">
                      <input
                        bind:value={searchEngineName}
                        class="p-1 bg-slate-100 rounded outline-0 border-2 border-slate-300 invalid:border-red-400"
                        type="text"
                        size="6"
                        placeholder="Name*"
                        required
                      />
                    </td>
                  {/if}
                  <td colspan={urlfocus ? '3' : '1'}>
                    <input
                      bind:value={searchEngineUrl}
                      on:focus={() => (urlfocus = true)}
                      on:blur={() => (urlfocus = false)}
                      class:min-w-full={urlfocus}
                      class="p-1 bg-slate-100 rounded outline-0 border-2 border-slate-300 invalid:border-red-400"
                      type="url"
                      size="12"
                      placeholder="URL*"
                      required
                    />
                  </td>
                  <td class="text-right">
                    <button class="mx-1" type="submit">
                      <i class="fa fa-check" />
                    </button>
                    <button on:click={() => removeSearchEngine(id)} type="button">
                      <i class="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              {:else}
                <tr>
                  <td class="py-2 text-center">{id + 1}.</td>
                  <td>{engine.name}</td>
                  <td class="max-w-[12ch] truncate">{engine.url}</td>
                  <td class="text-right">
                    <button on:click={() => editSearchEngine(engine)} class="mx-1" type="button">
                      <i class="fa fa-pencil" />
                    </button>
                    <button on:click={() => removeSearchEngine(id)} type="button">
                      <i class="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              {/if}
            {/each}
          </tbody>
        </table>
      </div>
      <small class="text-xs font-extralight"
        >* Search query will be inserted at the end of URL</small
      >
    </form>
  {/if}
</div>
