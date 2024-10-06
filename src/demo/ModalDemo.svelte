<script lang="ts">
  import type { ModalPosition } from '../components';
  import Button from '../components/Button.svelte';
  import FlexLayout from '../components/FlexLayout.svelte';
  import FlexLayoutItem from '../components/FlexLayoutItem.svelte';
  import FormLayout from '../components/FormLayout.svelte';
  import FormLayoutItem from '../components/FormLayoutItem.svelte';
  import Modal from '../components/Modal.svelte';

  const Positions: Record<ModalPosition, string> = {
    left: 'Left',
    center: 'Center',
    right: 'Right',
  };

  export let loading: boolean = false;
  export let open: boolean = false;
  export let width: number = 500;
  export let position: ModalPosition = 'center';

  function handleClick() {
    open = true;
  }

  function handleCancelClick(ms: number = 500) {
    loading = true;
    setTimeout(() => {
      open = false;
      loading = false;
    }, ms);
  }
</script>

<style lang="scss">
</style>

<div class="wrapper">
  <h2>Modal</h2>
  <FormLayout>
    <FormLayoutItem>
      <label slot="label" for="">Width</label>
      <input type="range" min="100" max="2000" step="100" bind:value={width}>
      <span slot="extra">{width} px</span>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Position</label>
      <FlexLayout>
        {#each Object.entries(Positions) as [key, value]}
          <FlexLayoutItem>
            <input id="ModalDemo_Position_{value}" type="radio" value={key} bind:group={position}>
            <label for="ModalDemo_Position_{value}">{value}</label>
          </FlexLayoutItem>
        {/each}
      </FlexLayout>
    </FormLayoutItem>
  </FormLayout>
  <br>
  <FlexLayout>
    <Button on:click={handleClick}>Open Modal</Button>
  </FlexLayout>
  <br>
</div>

<Modal bind:open={open} width={width} position={position}>
  <div slot="header">Header</div>
  <div>
    {#each new Array(200).fill(0) as i, ii}
      body {i + ii}
      <br>
      Body
      <br>
      BODY
      <br>
    {/each}
  </div>
  <svelte:fragment slot="footer">
    <Button on:click={() => handleCancelClick(0)} disabled={loading}>Cancel</Button>
    <Button on:click={() => handleCancelClick(3000)} loading={loading}>OK</Button>
  </svelte:fragment>
</Modal>
