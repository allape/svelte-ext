<script lang="ts">
  import type { CSSProperties, ModalPosition } from './index';

  export let mask: boolean = true;
  export let closableMask: boolean = true;

  export let width: number = 500;
  export let position: ModalPosition = 'center';

  export let open: boolean = false;

  const Positions: Record<ModalPosition, CSSProperties['margin']> = {
    left: '0 auto 0 10px',
    center: '0 auto',
    right: '0 10px 0 auto',
  };

  function handleClose() {
    open = false;
  }
</script>

<style lang="scss">
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    .modal {
      position: relative;
      top: 10px;
      margin: 0 auto;
      padding: 10px;
      max-height: calc(100vh - 40px);
      max-width: calc(100vw - 40px);
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      background-color: white;

      @media (prefers-color-scheme: dark) {
        background-color: black;
      }

      @media screen and (max-width: 500px) {
        top: 0;
        left: 0;
        min-width: 100px;
        max-width: calc(100vw - 20px);
        max-height: calc(100vh - 20px);
        margin: 0 !important;
      }

      .header {
        padding-bottom: 10px;
      }

      .footer {
        padding-top: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
      }

      .body {
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: auto;
      }
    }
  }
</style>

{#if open}
  <div class="wrapper">
    {#if mask}
      <div role="none" class="mask" on:click={closableMask ? handleClose : undefined}></div>
    {/if}
    <div class="modal" style="width: {width}px; margin: {Positions[position]};">
      {#if $$slots.header}
        <div class="header">
          <slot name="header"></slot>
        </div>
      {/if}
      <div class="body">
        <slot></slot>
      </div>
      {#if $$slots.footer}
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      {/if}
    </div>
  </div>
{/if}
