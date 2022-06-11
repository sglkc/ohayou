<script>
  import { scale, slide } from 'svelte/transition';
  import Library from '$lib/Library.svelte';
  import Search from '$lib/Search.svelte';
  import Title from '$lib/Title.svelte';
  import '../app.css';

  let show = false;

  setTimeout(() => (show = true), 250);
</script>

{#if show}
  <div in:scale={{ delay: 50 }}>
    <Title />
  </div>
  <div in:slide={{ delay: 750 }}>
    <Search />
    <hr class="mb-5 border-0" />
    <div class="mx-auto w-fit">
      <Library />
    </div>
  </div>
{/if}
