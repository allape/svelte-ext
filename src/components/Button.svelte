<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import DotLoading from './DotLoading.svelte';
  import SingleCharLoading from './SingleCharLoading.svelte';

  type LoadingType = 'dot' | 'single-char';

  interface $$Props extends HTMLButtonAttributes {
    loading?: boolean;
    loadingType?: LoadingType;
  }

  const Loading: Record<LoadingType, Partial<SvelteComponent>> = {
    'dot': DotLoading,
    'single-char': SingleCharLoading,
  };

  export let loadingType: Exclude<$$Props['loadingType'], undefined> = 'dot';

  export let loading: $$Props['loading'] = false;
  export let disabled: $$Props['disabled'] = false;
</script>

<style lang="scss">
  .wrapper {
    position: relative;

    &.isLoading {
      .slot {
        opacity: 0;
      }
    }

    .loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>

<button class="wrapper" class:isLoading={loading} disabled={disabled || loading} on:click {...$$restProps}>
  <span class="slot">
    <slot></slot>
  </span>
  {#if loading}
    <slot name="loading">
      <div class:loading>
        <svelte:component this={Loading[loadingType]}/>
      </div>
    </slot>
  {/if}
</button>
