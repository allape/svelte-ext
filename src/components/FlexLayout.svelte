<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { CSSProperties } from './index';

  interface $$Props extends Partial<SvelteHTMLElements['div']> {
    gap?: CSSProperties['gap'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    alignContent?: CSSProperties['alignContent'];
    flexWrap?: CSSProperties['flexWrap'];
    flexDirection?: CSSProperties['flexDirection'];
  }

  export let gap: $$Props['gap'] = '10px';
  export let justifyContent: $$Props['justifyContent'] = 'flex-start';
  export let alignItems: $$Props['alignItems'] = 'center';
  export let alignContent: $$Props['alignContent'] = 'center';
  export let flexWrap: $$Props['flexWrap'] = 'wrap';
  export let flexDirection: $$Props['flexDirection'] = 'row';
</script>

<style lang="scss">
  .wrapper {
    display: flex;
  }
</style>

<div class="wrapper"
     style="gap: {gap}; justify-content: {justifyContent}; align-items: {alignItems}; align-content: {alignContent}; flex-wrap: {flexWrap}; flex-direction: {flexDirection};"
     {...$$restProps}>
  <slot></slot>
</div>
