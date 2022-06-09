<script>
  let keyword = '';

  async function search(event) {
    event.preventDefault();
    if (!keyword.length) return;
    window.open('https://duckduckgo.com/?q=' + encodeURI(keyword.replace(/ /g, '+')));
  }
</script>

<form class="flex justify-center" autocomplete="off">
  <input
    bind:value={keyword}
    class="bg-white/75 focus:bg-white rounded-l ring-1 p-2 w-2/3 focus:w-full transition-width"
    size="28"
    placeholder="Where do you want to go?"
  />
  <button
    on:click={search}
    class="bg-white/75 hover:bg-white rounded-r ring-1 py-2 px-4 transition-colors"
    type="submit"
  >
    <i class="fa fa-search hover:" />
  </button>
</form>

<style>
  .transition-width {
    transition: width;
    transition-timing-function: cubic-bezier(1, 0, 0.2, 0.4);
    transition-duration: 250ms;
  }
</style>
