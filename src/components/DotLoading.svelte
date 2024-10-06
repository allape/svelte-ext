<script lang="ts">
  import { onMount } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { ILoadingComponentProps } from './index';

  interface $$Props extends Partial<Pick<SvelteHTMLElements['span'], 'class'>>, ILoadingComponentProps {
  }

  export let timeout: Exclude<$$Props['timeout'], undefined> = 300;
  export let character: Exclude<$$Props['character'], undefined> = '...';

  let count: number = character.length;
  let char: string = character[0];

  let text: string = '';

  function tick() {
    let length = text.length + 1;
    if (length > count) {
      length = 1;
    }
    text = ''.padEnd(length, char);
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
