<script lang="ts">
  import type { LoadingType } from '../components';
  import Button from '../components/Button.svelte';
  import FlexLayout from '../components/FlexLayout.svelte';
  import FormLayout from '../components/FormLayout.svelte';
  import FormLayoutItem from '../components/FormLayoutItem.svelte';

  const LoadingTypes: Record<LoadingType, string> = {
    'dot': 'Dot',
    'single-char': 'Single Character',
  };

  export let ms: number = 5000;
  export let loading: boolean = false;
  export let loadingType: LoadingType = 'dot';
  export let loadingTimeout: number = 200;

  function handleClick() {
    console.log('Button clicked');
    loading = true;
    setTimeout(() => {
      loading = false;
    }, ms);
  }

</script>

<style lang="scss">
</style>

<div class="wrapper">
  <FormLayout>
    <h2 slot="header">Button</h2>
    <FormLayoutItem>
      <label slot="label" for="">Timeout</label>
      <input type="range" min="500" max="20000" step="500" bind:value={ms}>
      <span slot="extra">{ms} ms</span>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Loading Flashing Timeout</label>
      <input type="range" min="0" max="1000" step="10" bind:value={loadingTimeout}>
      <span slot="extra">{loadingTimeout} ms</span>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Loading Type</label>
      {#each Object.entries(LoadingTypes) as [key, value]}
        <input id={value} type="radio" value={key} bind:group={loadingType}>
        <label for={value}>{value}</label>
      {/each}
    </FormLayoutItem>
  </FormLayout>
  <br>
  <FlexLayout>
    <Button loading={loading} loadingType={loadingType}
            loadingTimeout={loadingTimeout} on:click={handleClick}>
      Wait for {ms} ms in {LoadingTypes[loadingType]} mode
    </Button>
    <Button disabled>Disabled Button</Button>
  </FlexLayout>
  <br>
</div>
