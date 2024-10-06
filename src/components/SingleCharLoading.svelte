<script lang="ts">
  import { onMount } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { ILoadingComponentProps } from './index';

  interface $$Props extends Partial<Pick<SvelteHTMLElements['span'], 'class'>>, ILoadingComponentProps {
  }

  export let timeout: Exclude<$$Props['timeout'], undefined> = 300;
  export let character: Exclude<$$Props['character'], undefined> = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'; // '-\\|/'

  let index: number = 0;
  let text: string = '';

  function tick() {
    text = character[index];
    index = (index + 1) % character.length;
  }

  onMount(() => {
    const id = setInterval(tick, timeout);
    tick();

    return () => clearInterval(id);
  });
</script>

<style lang="scss">
  .wrapper {
    white-space: none;
    overflow: hidden;
  }
</style>

<span class="wrapper" {...$$restProps}>
  {text}
</span>
