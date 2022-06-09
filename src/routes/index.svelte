<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import anime from 'animejs';
  import Search from '$lib/Search.svelte';
  import Title from '$lib/Title.svelte';
  import '../app.css';

  let opacity = 0;

  onMount(() => {
    anime({
      targets: '#title',
      translateY: 50,
      delay: 500,
      duration: 250,
      direction: 'reverse',
      easing: 'cubicBezier(0.7, -0.02, 0.44, 0.97)',
      complete: () => {
        opacity = 100;
      }
    });
  });
</script>

<Title id="title" />
<div class="mb-5 transition-opacity" style="opacity: {opacity}">
  <Search id="search" />
</div>
