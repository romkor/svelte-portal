Svelte component for rendering outside the DOM of parent component

Idea borrowed from here: https://github.com/sveltejs/svelte/issues/3088#issuecomment-505785516

# Installation

```sh
npm install --save svelte-portal
```

or

```sh
yarn add svelte-portal
```

# Usage Portal component

The `<Portal />` component has only one property: `target`

target can be a HTMLElement `target={document.body}` or a css selector `target="#modals"` that points to an already existing element.

When no target is given it defaults to: `document.body`.

## Example

```html
<script>
  import Portal from "svelte-portal";
</script>

<Portal target="body">
  <div class="toast">Entity successfully updated!</div>
</Portal>
```

# Usage portal action

The functionality can also be applied to DOM elements directly via a svelte action:

## Example

```html
<script>
  import { portal } from "svelte-portal";
</script>

<div class="toast" use:portal={"body"} hidden>Entity successfully updated!</div>
```

The `hidden` atrribute is only needed when using ssr, when portal has moved the element to it's targetted location it removes the hidden attribute.

## TypeScript support

`<script lang="ts">` users should import from `"svelte-portal/src/Portal.svelte"` instead of `"svelte-portal"` to get typing support.
