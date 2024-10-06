<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { ILoadingComponentProps } from './index';

  interface $$Props extends Partial<Pick<SvelteHTMLElements['span'], 'class'>>, ILoadingComponentProps {
  }

  export let character: Exclude<$$Props['character'], undefined> = '|';
  export let timeout: Exclude<$$Props['timeout'], undefined> = 1000;
</script>

<style lang="scss">
  @keyframes Spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .wrapper {
    white-space: none;
    overflow: hidden;
    display: inline-block;
    animation: Spinning 1s linear infinite;
  }
</style>

<span class="wrapper" style="animation-duration: {timeout}ms;" {...$$restProps}>
  {character}
</span>
