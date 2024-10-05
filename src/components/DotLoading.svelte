<script lang="ts">
  import { onMount } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';

  interface $$Props extends Partial<Pick<SvelteHTMLElements['span'], 'class'>> {
    character?: string;
    count?: number;
    timeout?: number;
  }

  export let timeout: Exclude<$$Props['timeout'], undefined> = 300;
  export let character: Exclude<$$Props['character'], undefined> = '.';
  export let count: Exclude<$$Props['count'], undefined> = 3;

  let text: string = '';

  function tick() {
    let length = text.length + 1;
    if (length > count) {
      length = 1;
    }
    text = ''.padEnd(length, character);
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
