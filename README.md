# Svelte Components for Daisy UI (WIP)

[![npm version](https://badge.fury.io/js/daisy-svelte.svg)](https://badge.fury.io/js/daisy-svelte)

Demos and examples -> [DaisySvelte - Storybook](https://walker-walks.github.io/daisy-svelte/)

## Getting started

Currently only support using with CDN version.
Sveltekit: Add those tags below to your `app.html`

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.18.1/dist/full.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
```

```terminal
npm i daisy-svelte
```

```svelte
<script lang="ts">
  import { Navbar, Button } from 'daisy-svelte';

</script>
<Nabvar>
  <Button label="DaisySvelte" />
  ...
```

## References:

[Official] Daisy UI https://daisyui.com/

## Status:

[ ] todo
[x] done
[/] beta

Actions

- [x] Button
- [/] Dropdown
- [/] Modal
- [ ] Swap

Datas display

- [ ] Alert
- [/] Avatar
- [ ] Badge
- [x] Card
- [ ] Carousel
- [ ] Collapse
- [ ] Countdown
- [ ] Kbd
- [ ] Progress
- [ ] Radial progres
- [ ] Stat
- [ ] Table
- [ ] Tooltip

Data input

- [ ] Checkbox
- [\] Text input
- [ ] Radio
- [ ] Range
- [ ] Rating
- [ ] Select
- [ ] Textarea
- [ ] Toggle

Layout

- [ ] Artboard
- [ ] Button group
- [ ] Divider
- [ ] Drawer
- [x] Hero
- [ ] Indicator
- [ ] Input group
- [ ] Mask
- [ ] Stack

Navigation

- [/] Breadcrumbs
- [ ] Bottom navigation
- [x] Link
- [ ] Menu
- [x] Navbar
- [ ] Indicator
- [ ] Pagination
- [ ] Steps
- [ ] Tab

Mockup

- [ ] Code
- [ ] Phone
- [ ] Window
