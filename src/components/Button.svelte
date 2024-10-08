<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import DotLoading from './DotLoading.svelte';
  import type { LoadingType } from './index';
  import SingleCharLoading from './SingleCharLoading.svelte';
  import SpinnerLoading from './SpinnerLoading.svelte';

  interface $$Props extends HTMLButtonAttributes {
    loading?: boolean;
    loadingType?: LoadingType;
    loadingTimeout?: number;
    loadingCharacter?: string;
  }

  const Loading: Record<LoadingType, Partial<SvelteComponent>> = {
    dot: DotLoading,
    'single-char': SingleCharLoading,
    spinner: SpinnerLoading,
  };

  export let loadingType: Exclude<$$Props['loadingType'], undefined> = 'dot';
  export let loadingTimeout: Exclude<$$Props['loadingTimeout'], undefined> = 200;
  export let loadingCharacter: $$Props['loadingCharacter'] = undefined;

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
      display: flex;
      justify-content: center;
      align-items: center;
      @media (prefers-color-scheme: dark) {
        color: white;
      }
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
        <svelte:component this={Loading[loadingType]} timeout={loadingTimeout} character={loadingCharacter}/>
      </div>
    </slot>
  {/if}
</button>
