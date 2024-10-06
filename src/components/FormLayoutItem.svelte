<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { CSSProperties, IFormRule } from './index';

  interface $$Props extends Partial<SvelteHTMLElements['tr']> {
    rules?: IFormRule[];

    value?: unknown;
    name?: string;

    colon?: boolean | string;
    justifyContent?: CSSProperties['justifyContent'];
  }

  export let rules: $$Props['rules'] = [];
  export let value: $$Props['value'] = '';
  export let name: $$Props['name'] = '';

  export let colon: $$Props['colon'] = ':';
  export let justifyContent: $$Props['justifyContent'] = 'flex-end';

  let errors: string[] = [];

  function validate(v: unknown) {
    errors = [];
    if (!rules) {
      return;
    }
    rules.forEach(rule => {
      const error = rule.validate(v, name, rule, rules);
      if (error) {
        errors.push(typeof rule.message === 'string' ? rule.message : rule.message(error));
      }
    });
  }

  $: {
    validate(value);
  }
</script>

<style lang="scss">
  .wrapper {
    .label {
      display: flex;
      align-items: flex-start;
      padding: 8px 10px;
    }

    .controlTD {
      padding: 8px 10px;

      .control {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
      }

      .extra {
        color: gray;
        padding-top: 4px;
        @media (prefers-color-scheme: dark) {
          color: lightgray;
        }

        .error {
          color: orangered;
        }
      }
    }
  }
</style>

<tr class="wrapper" {...$$restProps}>
  <td>
    <div class="label" style="justify-content: {justifyContent};">
      <slot name="label"></slot>{colon ? colon : ''}
    </div>
  </td>
  <td class="controlTD">
    <div class="control">
      <slot></slot>
    </div>
    {#if $$slots.extra || errors.length > 0}
      <div class="extra">
        <slot name="extra"></slot>
        {#each errors as error}
          <div class="error">{error}</div>
        {/each}
      </div>
    {/if}
  </td>
</tr>
