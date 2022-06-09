<script>
  let keyword = '';
  export let id;

  async function search(event) {
    event.preventDefault();
    if (!keyword.length) return;
    window.open('https://duckduckgo.com/?q=' + encodeURI(keyword.replace(/ /g, '+')));
  }
</script>

<form {id} class="flex justify-center grow font-serif" autocomplete="off">
  <input
    bind:value={keyword}
    class="bg-white/75 hover:bg-white focus:bg-white rounded-l-md ring-1 p-2 w-2/3 focus:w-10/12 sm:focus:w-full"
    size="30"
    placeholder="Where do you want to go?"
  />
  <button
    on:click={search}
    class="bg-white/75 hover:bg-white rounded-r-md ring-1 py-2 px-4 transition-colors"
    type="submit"
  >
    <i class="fa fa-search hover:" />
  </button>
</form>

<style>
  input {
    transition: 250ms width cubic-bezier(1, 0, 0.2, 0.4);
  }
</style>
