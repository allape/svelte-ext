<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { CSSProperties } from './index';

  interface $$Props extends Partial<SvelteHTMLElements['div']> {
    flex?: CSSProperties['flex'];
    order?: CSSProperties['order'];
    alignSelf?: CSSProperties['alignSelf'];
  }

  export let flex: $$Props['flex'] = '1 1 auto';
  export let order: $$Props['order'] = 0;
  export let alignSelf: $$Props['alignSelf'] = 'auto';
</script>

<div style="flex: {flex}; order: {order}; align-self: {alignSelf};" {...$$restProps}>
  <slot></slot>
</div>
