<script lang="ts">
  import { onMount } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';

  interface $$Props extends Partial<Pick<SvelteHTMLElements['span'], 'class'>> {
    charSet?: string[];
    timeout?: number;
  }

  export let timeout: Exclude<$$Props['timeout'], undefined> = 300;
  export let charSet: Exclude<$$Props['charSet'], undefined> = ['-', '\\', '|', '/'];

  let index: number = 0;
  let text: string = '';

  function tick() {
    text = charSet[index];
    index = (index + 1) % charSet.length;
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
