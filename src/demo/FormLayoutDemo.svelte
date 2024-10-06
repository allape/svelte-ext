<script lang="ts">
  import FormLayout from '../components/FormLayout.svelte';
  import FormLayoutItem from '../components/FormLayoutItem.svelte';

  interface IFormValue {
    firstName?: string;
    lastName?: string;
  }

  export let borderCollapse: boolean = false;
  export let value: IFormValue = {};
</script>

<style lang="scss">
  .wrapper {
    .form {
      input {
        width: 100%;
      }
    }
  }
</style>

<div class="wrapper">
  <h2>Form Layout</h2>
  <FormLayout>
    <FormLayoutItem>
      <label slot="label" for="">Border Collapse</label>
      <input type="checkbox" bind:checked={borderCollapse}>
    </FormLayoutItem>
  </FormLayout>
  <p class="form">
    <FormLayout border={1} style="border-collapse: {borderCollapse ? 'collapse' : 'seperated'};">
      <h3 slot="header">This is a header, you can make statements here.</h3>
      <FormLayoutItem value={value.firstName}
                      rules={[{ message: 'First name is required!', validate: (v) => !v }]}>
        <label slot="label" for="">First Name</label>
        <input type="text" bind:value={value.firstName}>
      </FormLayoutItem>
      <FormLayoutItem>
        <label slot="label" for="">Last Name</label>
        <input type="text" bind:value={value.lastName}>
        <div slot="extra">This is the last name</div>
      </FormLayoutItem>
    </FormLayout>
  </p>
</div>
