<script lang="ts">
  import type { CSSProperties } from '../components';
  import FlexLayout from '../components/FlexLayout.svelte';
  import FlexLayoutItem from '../components/FlexLayoutItem.svelte';
  import FormLayout from '../components/FormLayout.svelte';
  import FormLayoutItem from '../components/FormLayoutItem.svelte';

  const JustifyContent = {
    'flex-start': 'Flex Start',
    'flex-end': 'Flex End',
    'center': 'Center',
    'space-between': 'Space Between',
    'space-around': 'Space Around',
    'space-evenly': 'Space Evenly',
  };
  const AlignItems = {
    'flex-start': 'Flex Start',
    'flex-end': 'Flex End',
    'center': 'Center',
    'baseline': 'Baseline',
    'stretch': 'Stretch',
  };
  const AlignContent = {
    'flex-start': 'Flex Start',
    'flex-end': 'Flex End',
    'center': 'Center',
    'space-between': 'Space Between',
    'space-around': 'Space Around',
    'stretch': 'Stretch',
  };
  const FlexWrap = {
    'nowrap': 'No Wrap',
    'wrap': 'Wrap',
    'wrap-reverse': 'Wrap Reverse',
  };
  const FlexDirection = {
    'row': 'Row',
    'row-reverse': 'Row Reverse',
    'column': 'Column',
    'column-reverse': 'Column Reverse',
  };

  export let gap: number = 10;
  export let justifyContent: CSSProperties['justifyContent'] = 'flex-start';
  export let alignItems: CSSProperties['alignItems'] = 'center';
  export let alignContent: CSSProperties['alignContent'] = 'center';
  export let flexWrap: CSSProperties['flexWrap'] = 'wrap';
  export let flexDirection: CSSProperties['flexDirection'] = 'row';

</script>

<style lang="scss">
  .wrapper {
    .item {
      border: 1px solid lightpink;
      padding: 4px;
    }
  }
</style>

<div class="wrapper">
  <h2>Flex Layout</h2>
  <FormLayout>
    <FormLayoutItem>
      <label slot="label" for="">Gap</label>
      <input type="range" min="0" max="50" step="5" bind:value={gap}>
      <span slot="extra">{gap} px</span>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Justify Content</label>
      <select bind:value={justifyContent}>
        {#each Object.entries(JustifyContent) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Align Items</label>
      <select bind:value={alignItems}>
        {#each Object.entries(AlignItems) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Align Content</label>
      <select bind:value={alignContent}>
        {#each Object.entries(AlignContent) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Flex Wrap</label>
      <select bind:value={flexWrap}>
        {#each Object.entries(FlexWrap) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </FormLayoutItem>
    <FormLayoutItem>
      <label slot="label" for="">Flex Direction</label>
      <select bind:value={flexDirection}>
        {#each Object.entries(FlexDirection) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </FormLayoutItem>
  </FormLayout>
  <FlexLayout gap="{gap}px" justifyContent={justifyContent}
              alignItems={alignItems} alignContent={alignContent}
              flexWrap={flexWrap} flexDirection={flexDirection}>
    {#each new Array(10).fill(0) as i, ii}
      <FlexLayoutItem>
        <div class="item">Item {i + ii}</div>
      </FlexLayoutItem>
    {/each}
  </FlexLayout>
</div>
