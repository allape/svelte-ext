<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  interface $$Props extends Partial<SvelteHTMLElements['table']> {
  }

</script>

<style lang="scss">
  .header {
    padding: 10px;
  }
</style>

<table {...$$restProps}>
  {#if $$slots.header}
    <thead>
    <tr>
      <td colspan="2" class="header">
        <slot name="header"></slot>
      </td>
    </tr>
    </thead>
  {/if}
  <tbody>
  <slot></slot>
  </tbody>
</table>
