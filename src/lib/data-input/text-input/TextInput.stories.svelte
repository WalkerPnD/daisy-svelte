<script>
  import { Size } from '../../params/size.const';

  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import TextInput from './TextInput.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
  title="Data Input/TextInput"
  component={TextInput}
  argTypes={{
    label: { control: 'text', default: 'TextInput2' },
    size: {
      control: {
        type: 'inline-radio',
        options: Object.keys(Size).map((it) => it),
      },
    },
  }} />

<Template let:args>
  <div>
    <TextInput {...args} />
    <TextInput {...args} color="primary" />
    <TextInput {...args} color="secondary" />
    <TextInput {...args} color="accent" />
    <TextInput {...args} ghost />
    <TextInput {...args} link />
  </div>
  <div class="mt-3">
    <TextInput {...args} outline />
    <TextInput {...args} color="primary" outline />
    <TextInput {...args} color="secondary" outline />
    <TextInput {...args} color="accent" outline />
    <TextInput {...args} ghost outline />
    <TextInput {...args} link outline />
  </div>
  <hr class="m-3" />
  <div>
    <TextInput {...args} color="info" />
    <TextInput {...args} color="success" />
    <TextInput {...args} color="warning" />
    <TextInput {...args} color="error" />
  </div>
  <div class="mt-3">
    <TextInput {...args} color="info" outline />
    <TextInput {...args} color="success" outline />
    <TextInput {...args} color="warning" outline />
    <TextInput {...args} color="error" outline />
  </div>
</Template>

<Story name="TextInputs with brand colors" label="TextInput" />

<Story name="outline">
  <TextInput outline />
  <TextInput color="primary" outline />
</Story>
