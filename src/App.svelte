<script lang="ts">
  import Button from './components/Button.svelte';

  let ms: number = 2000;
  let loading = false;

  let loadingType: 'dot' | 'single-char' = 'dot';

  const LoadingTypes: Record<'dot' | 'single-char', string> = {
    'dot': 'Dot',
    'single-char': 'Single Character',
  };

  function handleClick() {
    console.log('Button clicked');
    loading = true;
    setTimeout(() => {
      loading = false;
    }, ms);
  }
</script>

<style lang="scss">
  .gapped {
    display: flex;
    gap: 10px;
  }
</style>

<div class="wrapper">
  <h2>Button</h2>
  <p>
    Timeout: <input type="range" min="500" max="20000" step="500" bind:value={ms}> {ms} ms
    <br>
    Loading Type:
    {#each Object.entries(LoadingTypes) as [key, value]}
      <label>
        <input type="radio" name="loadingType" value={key} bind:group={loadingType}>
        {value}
      </label>
    {/each}
  </p>
  <p class="gapped">
    <Button {loading} {loadingType} on:click={handleClick}>Wait for {ms} ms in {LoadingTypes[loadingType]} mode</Button>
  </p>
  <hr>
</div>
