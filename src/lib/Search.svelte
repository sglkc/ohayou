<script>
  let keyword = '';

  async function search(event) {
    if (!keyword.length) return;
    window.open('https://duckduckgo.com/?q=' + encodeURI(keyword.replace(/ /g, '+')));
  }
</script>

<form on:submit|preventDefault={search} class="flex justify-center font-serif" autocomplete="off">
  <input
    bind:value={keyword}
    class="bg-white/75 focus:bg-white rounded-l-md p-2 w-2/3 focus:w-10/12 sm:focus:w-full transition-[width]"
    type="text"
    size="30"
    placeholder="Where would you like to go?"
  />
  <button class="bg-white/75 hover:bg-white rounded-r-md py-2 px-4 transition-colors" type="submit">
    <i class="fa fa-search hover:" />
  </button>
</form>
