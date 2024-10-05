<script lang="ts">
  import type { LoadingType, ModalPosition } from './components';
  import Button from './components/Button.svelte';
  import FormLayout from './components/FormLayout.svelte';
  import FormLayoutItem from './components/FormLayoutItem.svelte';
  import Modal from './components/Modal.svelte';

  let buttonProps = {
    LoadingTypes: {
      'dot': 'Dot',
      'single-char': 'Single Character',
    } as Record<'dot' | 'single-char', string>,
    ms: 5000,
    loading: false,
    loadingType: 'dot' as LoadingType,
    loadingTimeout: 200,
    handleClick: () => {
      console.log('Button clicked');
      buttonProps.loading = true;
      setTimeout(() => {
        buttonProps.loading = false;
      }, buttonProps.ms);
    },
  };

  interface IFormValue {
    firstName?: string;
    lastName?: string;
  }

  let formLayoutProps = {
    border: 1,
    borderCollapse: false,
    value: {} as IFormValue,
  };

  let modalProps = {
    loading: false,
    open: false,
    width: 500,
    position: 'center' as ModalPosition,
    Positions: {
      left: 'Left',
      center: 'Center',
      right: 'Right',
    } as Record<ModalPosition, string>,
    handleClick: () => {
      modalProps.open = true;
    },
    handleCancelClick: (ms: number = 500) => {
      modalProps.loading = true;
      setTimeout(() => {
        modalProps.open = false;
        modalProps.loading = false;
      }, ms);
    },
  };
</script>

<style lang="scss">
  .gapped {
    display: flex;
    gap: 10px;
  }

  .form {
    input {
      width: 100%;
    }
  }
</style>

<div class="wrapper">
  <h2>Svelte Extra: v{__APP_VERSION__}</h2>
  <hr>
  <h2>Button</h2>
  <p>
    Timeout: <input type="range" min="500" max="20000" step="500" bind:value={buttonProps.ms}> {buttonProps.ms} ms
    <br>
    Loading Flashing Timeout: <input type="range" min="0" max="1000" step="10"
                                     bind:value={buttonProps.loadingTimeout}> {buttonProps.loadingTimeout} ms
    <br>
    Loading Type:
    {#each Object.entries(buttonProps.LoadingTypes) as [key, value]}
      <label>
        <input type="radio" name="loadingType" value={key} bind:group={buttonProps.loadingType}>
        {value}
      </label>
    {/each}
  </p>
  <p class="gapped">
    <Button loading={buttonProps.loading} loadingType={buttonProps.loadingType}
            loadingTimeout={buttonProps.loadingTimeout} on:click={buttonProps.handleClick}>
      Wait for {buttonProps.ms} ms in {buttonProps.LoadingTypes[buttonProps.loadingType]} mode
    </Button>
    <Button disabled>Disabled Button</Button>
  </p>
  <hr>
  <h2>Form Layout</h2>
  <p>
    Border: <input type="range" min="0" max="10" step="1" bind:value={formLayoutProps.border}> {formLayoutProps.border}
    px
    <br>
    Border Collapse: <input type="checkbox" bind:checked={formLayoutProps.borderCollapse}>
  </p>
  <p class="form">
    <FormLayout border={formLayoutProps.border}
                style="border-collapse: {formLayoutProps.borderCollapse ? 'collapse' : 'seperated'};">
      <h3 slot="header">This is a header, you can make statements here.</h3>
      <FormLayoutItem value={formLayoutProps.value.firstName}
                      rules={[{ message: 'First name is required!', validate: (v) => !v }]}>
        <label slot="label" for="">First Name</label>
        <input type="text" bind:value={formLayoutProps.value.firstName}>
      </FormLayoutItem>
      <FormLayoutItem>
        <label slot="label" for="">Last Name</label>
        <input type="text" bind:value={formLayoutProps.value.lastName}>
        <div slot="extra">This is the last name</div>
      </FormLayoutItem>
    </FormLayout>
  </p>
  <hr>
  <h2>Modal</h2>
  <p>
    Width: <input type="range" min="100" max="2000" step="100" bind:value={modalProps.width}> {modalProps.width}
    px
    <br>
    Position:
    {#each Object.entries(modalProps.Positions) as [key, value]}
      <label>
        <input type="radio" name="position" value={key} bind:group={modalProps.position}>
        {value}
      </label>
    {/each}
  </p>
  <p class="gapped">
    <Button on:click={modalProps.handleClick}>Open Modal</Button>
    <Modal bind:open={modalProps.open} width={modalProps.width} position={modalProps.position}>
      <div slot="header">Header</div>
      <div>
        {#each new Array(200).fill(1) as i, ii}
          body {i}, {ii}
          <br>
          Body
          <br>
          BODY
          <br>
        {/each}
      </div>
      <svelte:fragment slot="footer">
        <Button on:click={() => modalProps.handleCancelClick(0)} disabled={modalProps.loading}>Cancel</Button>
        <Button on:click={() => modalProps.handleCancelClick(3000)} loading={modalProps.loading}>OK</Button>
      </svelte:fragment>
    </Modal>
  </p>
</div>
