<script>
  import { bindClasses } from '../../utils/bind-classes';
  import { switchClass } from '../../utils/switch-class';
  import { createSwitchClass } from '../../utils/switch-class';

  const prefix = 'card';
  const sw = createSwitchClass(prefix);
  let className = '';
  export { className as class };
  export let bodyClass = '';
  export let actionClass = '';
  export let titleClass = '';
  export let imgClass = '';
  export let figureClass = '';
  export let topActionClass = '';

  export let title = '';
  export let src = '';
  export let alt = '';
  export let compact = false;
  export let side = false;
  export let lgSide = false;
  export let imgButtom = false;
  export let imgFull = false;
  export let glass = false;
</script>

<div
  {...$$restProps}
  class="card {className}"
  class:card-compact={compact}
  class:card-side={side}
  class:lg:card-side={lgSide}
  class:image-full={imgFull}
  class:glass>
  {#if !imgButtom}
    <figure class={figureClass}>
      <img {src} {alt} class={imgClass} />
    </figure>
  {/if}
  <div class="card-body {bodyClass}">
    <div class="card-actions {topActionClass}">
      <slot name="top-actions" />
    </div>
    <h2 class="card-title {titleClass}">
      <slot name="title">{title}</slot>
    </h2>
    <slot />
    <div class="card-actions {actionClass}">
      <slot name="actions" />
    </div>
  </div>
  {#if imgButtom}
    <figure><img {src} {alt} /></figure>
  {/if}
</div>
