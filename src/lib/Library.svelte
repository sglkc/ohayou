<script>
  import { fade, slide } from 'svelte/transition';
  import { localBookmarks } from '$lib/stores';

  $: localBookmarks.set(bookmarks);

  let bookmarks = $localBookmarks;
  let bookmarkForm = false;
  let bookmarkName = '';
  let bookmarkUrl = 'http://';
  let bookmarkIcon = '';
  let bookmarkId = 0;

  function submitBookmark(event) {
    const googleIcon = `https://s2.googleusercontent.com/s2/favicons?domain=${bookmarkUrl}&sz=32`;
    const id = bookmarkId ?? bookmarks.length;

    bookmarks[id] = {
      id,
      name: bookmarkName,
      url: bookmarkUrl,
      icon: bookmarkIcon || googleIcon
    };
    bookmarkForm = false;
    bookmarkName = '';
    bookmarkUrl = 'http://';
    bookmarkIcon = '';
  }

  function removeBookmark(id) {
    bookmarks.splice(id, 1);
    bookmarks = bookmarks;
  }

  function editBookmark(bookmark) {
    bookmarkForm = true;
    bookmarkName = bookmark.name;
    bookmarkUrl = bookmark.url;
    bookmarkIcon = bookmark.icon;
    bookmarkId = bookmark.id;
  }
</script>

<div class="grid grid-cols-4 gap-2 font-sans text-center select-none">
  {#each bookmarks as bookmark, i (bookmark.id)}
    <div
      class="w-[93px] h-[84px] relative group p-3 rounded hover:scale-110 transition-transform"
      transition:fade={{ duration: 200 }}
    >
      <button
        class="invisible group-hover:visible absolute z-10 -top-3 left-0 scale-90 sm:scale-75 p-1 px-2.5 rounded-full bg-white/75"
        on:click={() => removeBookmark(i)}
      >
        <i class="fa fa-close text-red-500" />
      </button>
      <a href={bookmark.url}>
        <img
          class="mx-auto mb-2 rounded"
          src={bookmark.icon}
          alt={bookmark.name}
          width="32"
          height="32"
        />
        <p class="text-sm max-w-[8ch] truncate">{bookmark.name}</p>
      </a>
      <button
        class="invisible group-hover:visible absolute z-10 -top-3 right-0 scale-90 sm:scale-75 p-1 px-2.5 rounded-full bg-white/75"
        on:click={() => editBookmark(bookmark)}
      >
        <i class="fa fa-pencil" />
      </button>
    </div>
  {/each}
  {#if bookmarks.length < 8}
    <button
      class="w-[93px] h-[84px] p-3 rounded hover:scale-110 transition-opacity opacity-25 hover:opacity-100"
      on:click={() => (bookmarkForm = !bookmarkForm)}
    >
      <i class="fa fa-plus-square text-white fa-2x mx-auto mb-2" />
      <p class="text-sm">New</p>
    </button>
  {/if}
</div>
{#if bookmarkForm}
  <form
    transition:slide
    class="mt-5 flex rounded text-xs w-fit mx-auto"
    autocomplete="off"
    on:submit|preventDefault={submitBookmark}
  >
    <div class="flex flex-col">
      <input bind:value={bookmarkId} type="hidden" />
      <input
        bind:value={bookmarkName}
        class="bg-white/80 p-2 rounded-tl border-l-2 border-t-2 border-blue-400 invalid:border-red-400 outline-0"
        type="text"
        placeholder="Name*"
        required
      />
      <input
        bind:value={bookmarkUrl}
        class="bg-white/80 p-2 border-l-2 border-blue-400 invalid:border-red-400 outline-0"
        type="url"
        placeholder="URL*"
        required
      />
      <input
        bind:value={bookmarkIcon}
        class="bg-white/80 p-2 rounded-bl border-l-2 border-b-2 border-blue-400 outline-0"
        type="url"
        placeholder="Icon URL"
      />
    </div>
    <button class="bg-blue-400 px-4 rounded-r border-2 border-blue-400" type="submit">
      <i class="fa fa-angle-right fa-2x text-white" />
    </button>
  </form>
{/if}
