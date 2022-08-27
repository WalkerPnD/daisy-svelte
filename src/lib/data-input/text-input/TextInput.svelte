<script>
  import { Color } from '../../params/color.const';
  import { Size } from '../../params/size.const';

  let className = '';
  export let bordered = false;
  /**
   * @type {import('../../params/color.const').Color}
   */
  export let color;
  export let ghost = false;
  /**
   * @type {import('../../params/size.const').Size}
   */
  export let size;
  export { className as class };
</script>

<input
  {...$$restProps}
  class="input {className}"
  class:input-bordered={bordered}
  class:input-ghost={ghost}
  class:input-primary={color === Color.primary}
  class:input-secondary={color === Color.secondary}
  class:input-accent={color === Color.accent}
  class:input-info={color === Color.info}
  class:input-success={color === Color.success}
  class:input-warning={color === Color.warning}
  class:input-error={color === Color.error}
  class:input-xs={size === Size.xs}
  class:input-sm={size === Size.sm}
  class:input-md={size === Size.md}
  class:input-lg={size === Size.lg}
  on:click
  on:change />
