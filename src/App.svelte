<script lang="ts">
  import ButtonDemo from './demo/ButtonDemo.svelte';
  import FlexLayoutDemo from './demo/FlexLayoutDemo.svelte';
  import FormLayoutDemo from './demo/FormLayoutDemo.svelte';
  import ModalDemo from './demo/ModalDemo.svelte';
</script>

<style lang="scss">
</style>

<div class="wrapper">
  <h2>Svelte Extra: v{__APP_VERSION__}</h2>
  <hr>
  <ButtonDemo/>
  <hr>
  <FlexLayoutDemo/>
  <hr>
  <FormLayoutDemo/>
  <hr>
  <ModalDemo/>
</div>

